const passport = require("passport");
const generateToken = require("../../middlewares/generateToken");
const generateReferalCode = require("../../middlewares/generateToken");
const User = require("../../models/User");
const UserReferalCode = require("../../models/UserReferalCode");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/key");
// routes handler
module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google", { failureRedirect: "/login" }),
		generateToken,
		(req, res) => {
			if (req.user) {
				if (req.user.isNew) {
					// user is new
					const user = req.user;
					var userBody = {};
					userBody.accountId = user.id;
					userBody.email = user.emails[0].value;
					userBody.name = {};
					userBody.name.first = user.name.givenName;
					userBody.name.last = user.name.familyName || "";
					userBody.gender = user.gender;
					const UserModel = new User(userBody);
					UserModel.save()
						.then(savedUser => {
							if (savedUser) {
								//sign Token
								const JWTPayload = {
									id: savedUser._id,
									email: savedUser.email
								};
								jwt.sign(
									JWTPayload,
									JWT_SECRET,
									{ expiresIn: 86400 },
									(err, token) => {
										if (!err) {
											token = "Bearer " + token;

											res.json({ token: req.token });
										} else {
											done("Cannot proceed", null);
										}
									}
								);
							}
						})
						.catch(err => {
							console.log(err);
						});
				} else {
					// same as login
					const savedUser = req.user;
					const JWTPayload = {
						id: savedUser._id,
						email: savedUser.email
					};
					//sign Token
					jwt.sign(
						JWTPayload,
						JWT_SECRET,
						{ expiresIn: 86400 },
						(err, token) => {
							if (!err) {
								token = "Bearer " + token;
								res.json({ token });
							} else {
								var errors = {};
								errors.login = "Cannot proceed";
								res.json({ error });
							}
						}
					);
				}
			} else {
				res.status(403).json({ error: "Cannot proceeed" });
			}
		}
	);
};
