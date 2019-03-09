const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20");
const {
	JWT_SECRET,
	googleClientID,
	googleClientSecret
} = require("../config/key");
const User = require("../models/User");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			User.findOne({ _id: jwt_payload.id, flag: false })
				.then(user => {
					if (user) {
						return done(null, user);
					}
					return done(null, false);
				})
				.catch(err => done(err, false));
		})
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user, done) => {
		done(null, user);
	});

	passport.use(
		new GoogleStrategy(
			{
				clientID: googleClientID,
				clientSecret: googleClientSecret,
				callbackURL: "/auth/google/callback",
				proxy: true
			},
			async (accessToken, refershToken, profile, done) => {
				var user = await User.findOne({ accountId: profile.id, flag: false });
				if (user) {
					user.refer = 0;
					done(null, user);
				} else {
					console.log(profile);
					user = {
						firstname: profile.name.givenName,
						lastname: profile.name.familyName,
						email: profile.emails[0].value,
						photo: profile.photos[0].value,
						gender: profile.gender
					};
					done(null, user);
				}
			}
		)
	);
};
