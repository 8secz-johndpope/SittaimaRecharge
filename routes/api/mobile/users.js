const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../../models/User");
const _ = require("lodash");
const passport = require("passport");
const validateRegisterInput = require("../../../services/validation/register");
const validateEditProfileInput = require("../../../services/validation/editProfile");
const validateLoginInput = require("../../../services/validation/login");
const generateToken = require("../../../middlewares/generateToken");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../../config/key");
var Base64 = require("js-base64").Base64;
const validator = require("validator");
var mongoose = require("mongoose");

router.get("/home", (req, res) => {
	res.send(`${Base64.encode(0)}, ${typeof parseInt(Base64.encode(0))}`);
});

// @route:  POST api/users/register
// @desc:   register the user
// @access: public
router.post("/register", (req, res) => {
	/*
  mandatory parameter:  username, email, password,password2,firstname,lastname
  optional Parameter:   googleID, facebookID, photo, organization, orgAddress
  */

	const { errors, isValid } = validateRegisterInput(req.body);

	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//check and save
	User.findOne({ email: req.body.email }).then(existingEmailUser => {
		if (existingEmailUser) {
			errors.email = "Email already exists";
			return res.status(400).json(errors);
		} else {
			var userBody = {};
			userBody.email = req.body.email;
			userBody.gender = req.body.gender;
			userBody.username = req.body.username;
			userBody.password = req.body.password;
			userBody.name = {};
			userBody.name.first = req.body.firstname;
			userBody.name.last = req.body.lastname;
			userBody.gender = req.body.gender;

			// check if email exists
			User.findOne({ email: userBody.email })
				.then(userFoundFromEmail => {
					// when email already exists in database
					if (userFoundFromEmail)
						return res.json({
							"errors.email": "Email already exists",
							userFoundFromEmail
						});
					// check if username exists
					User.findOne({ username: userBody.username })
						.then(userFoundFromUsername => {
							if (userFoundFromUsername)
								return res.json({
									"errors.username": "Username already exists",
									userFoundFromUsername
								});
							const userModel = new User(userBody);
							userModel
								.save()
								.then(savedUser => {
									if (savedUser) {
										res.json({ success: true });
									}
								})
								.catch(err => {
									console.log(err);
								});
						})
						.catch(err => {
							console.log(err);
						});
				})
				.catch(err => {
					console.log(err);
				});
		}
	});
});

// @route:  POST api/users/register
// @desc:   register the user
// @access: public
router.post("/edit", (req, res) => {
	/*
  mandatory parameter:  username, email, password,password2,firstname,lastname
  optional Parameter:   googleID, facebookID, photo, organization, orgAddress
  */

	const { errors, isValid } = validateRegisterInput(req.body);

	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//check and save
	User.findOne({ email: req.body.email }).then(existingEmailUser => {
		if (existingEmailUser) {
			errors.email = "Email already exists";
			return res.status(400).json(errors);
		} else {
			var userBody = {};
			userBody.email = req.body.email;
			userBody.username = req.body.username;
			userBody.password = req.body.password;
			userBody.name = {};
			userBody.name.first = req.body.firstname;
			userBody.name.last = req.body.lastname;
			userBody.gender = req.body.gender;

			// const role = Base64.decode(req.body.role || " ");
			var privilegeBody = {};
			privilegeBody.role = req.body.role || 0;

			// if (!typeof privilegeBody.role == "number")
			// 	return res.json({ success: false });

			// check if email exists
			User.findOne({ email: userBody.email })
				.then(userFoundFromEmail => {
					// when email already exists in database
					if (userFoundFromEmail)
						return res.json({
							"errors.email": "Email already exists",
							userFoundFromEmail
						});
					// check if username exists
					User.findOne({ username: userBody.username })
						.then(userFoundFromUsername => {
							if (userFoundFromUsername)
								return res.json({
									"errors.username": "Username already exists",
									userFoundFromUsername
								});
							User.findByIdAndUpdate(
								req.user.id,
								{ $set: userBody },
								{ new: true }
							).then(profile => res.json(profile));
						})
						.catch(err => {
							console.log(error);
						});
				})
				.catch(err => {
					console.log(error);
				});
		}
	});
});

// @route:  POST api/users/login
// @desc:   login the user and response the token
// @access: public
router.post("/login", (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const { emailOrUsername, password } = req.body;

	const isEmail = validator.isEmail(emailOrUsername);

	User.findOne(
		isEmail ? { email: emailOrUsername } : { username: emailOrUsername }
	).then(user => {
		if (user) {
			if (user.flag) {
				errors.message = "You cannot Login with this email";
				return res.status(403).json(errors);
			}

			bcrypt.compare(password, user.password, (err, isMatch) => {
				if (err) {
					return console.log(err);
				}
				if (isMatch) {
					// user matched

					const JWTPayload = { id: user.id, email: user.email };
					//sign Token
					jwt.sign(
						JWTPayload,
						JWT_SECRET,
						{ expiresIn: 36000 },
						(err, token) => {
							if (!err) {
								res.json({
									token: "Bearer " + token
								});
							} else {
								console.log(err);
							}
						}
					);
				} else {
					//password do not match
					res.json({ "errors.password": "Password do not match" });
				}
			});
		} else {
			//no user with such email
			res.json({ "errors.email": "No user with this email" });
		}
	});
});

// @route:  POST api/users/current
// @desc:   get the details of currently logged in user
// @access: private
router.get(
	"/current",
	passport.authenticate("jwt", { session: false }),
	generateToken,
	(req, res) => {
		res.json(req.user);
	}
);

// @route:  POST api/users/username
// @desc:   response the userDetails by each username
// @access: private
router.get(
	"/username/:username",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const username = req.param("username");
		const errors = {};
		User.findOne({ username }).then(user => {
			if (!user) {
				errors.username = "invalid username";
				return res.status(404).json(errors);
			}
			res.json(user);
		});
	}
);

// @route:  POST api/users/email
// @desc:   response the userDetails by each email
// @access: private
router.get("/email/:email", (req, res) => {
	const email = req.param("email");
	const errors = {};
	User.findOne({ email }).then(user => {
		if (!user) {
			errors.email = "invalid email";
			return res.status(404).json(errors);
		}
		res.json(user);
	});
});

// @route:  POST api/users/user
// @desc:   response the userDetails by each userID
// @access: private
router.get("/user/:userId", (req, res) => {
	var userId = mongoose.Types.ObjectId(req.params.userId);
	const errors = {};
	User.findById(userId).then(userDetail => {
		if (!userDetail) {
			errors.user = "invalid userID";
			return res.status(404).json(errors);
		}
		res.json(userDetail);
	});
});

// @route:  GET api/users/list
// @desc:   GET ALL USER LIST
// @access: private
router.get("/list", (req, res) => {
	const errors = {};
	User.find().then(users => {
		if (!users) {
			errors.email = "No user found";
			return res.status(404).json(errors);
		}
		res.json(users);
	});
});

router.post("/remove", (req, res) => {
	var userId = mongoose.Types.ObjectId(req.body.userId);
	User.findByIdAndUpdate(userId, { $set: { flag: true } }, { new: true }).then(
		userProfile => {
			res.json(userProfile);
			console.log(req.user);
			// log(req.user._id);
		}
	);
});

module.exports = router;
