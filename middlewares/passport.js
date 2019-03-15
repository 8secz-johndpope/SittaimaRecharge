const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20");
const {
	JWT_SECRET,
	googleClientID,
	googleClientSecret
} = require("../config/key");
const User = require("../models/User");
const generateReferalCode = require("../middlewares/generateReferalCode");

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
				console.log("profile via google", profile);
				var user = await User.findOne({ accountId: profile.id, flag: false });
				if (user) {
					user.isNew = false;
					done(null, user);
				} else {
					const newUser = profile;
					newUser.isNew = true;
					done(null, newUser);
				}
			}
		)
	);
};
