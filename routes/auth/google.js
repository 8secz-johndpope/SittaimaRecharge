const passport = require("passport");
const generateToken = require("../../middlewares/generateToken");

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
					userModel
						.save()
						.then(savedUser => {
							if (savedUser) {
								generateReferalCode(userBody.email)
									.then(referalCode => {
										var userReferalBody = {};
										userReferalBody.referalCode = referalCode;
										userReferalBody.user = savedUser._id;
										const UserReferalBody = new UserReferalBody(
											userReferalBody
										);
										UserReferalBody.save()
											.then(savedReferal => {
												const JWTPayload = {
													id: savedUser._id,
													email: savedUser.email,
													referalCode: referalCode
												};
												//sign Token
												jwt.sign(
													JWTPayload,
													JWT_SECRET,
													{ expiresIn: 86400 },
													(err, token) => {
														if (!err) {
															token = "Bearer " + token;

															res.json({ user: savedUser, token: req.token });
														} else {
															done("Cannot proceed", null);
														}
													}
												);
											})
											.catch(err => {});
									})
									.catch(err => {});
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
						email: savedUser.email,
						referalCode: savedUser.referalCode
					};
					//sign Token
					jwt.sign(
						JWTPayload,
						JWT_SECRET,
						{ expiresIn: 86400 },
						(err, token) => {
							if (!err) {
								token = "Bearer " + token;

								done(null, { savedUser, token });
							} else {
								done("Cannot proceed", null);
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
