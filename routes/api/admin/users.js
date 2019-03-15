const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Admin = require("../../../models/Admin");
const _ = require("lodash");
const passport = require("passport");
const validateRegisterInput = require("../../../services/validation/register");
const validateLoginInput = require("../../../services/validation/login");
const validateEditProfileInput = require("../../../services/validation/editProfile");

const generateToken = require("../../../middlewares/generateToken");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../../config/key");

router.get("/home", (req, res) => {
	res.send("Welcome Home buddy");
});

// @route:  POST api/users/register
// @desc:   register the user
// @access: public
router.post("/register", (req, res) => {
	/*
  mandatory parameter:  username, email, password,password2,firstname,lastname
  optional Parameter:   googleID, facebookID, photo, organization, orgAddress
  */
	console.log("register");
	const { errors, isValid } = validateRegisterInput(req.body);

	//check validation
	if (!isValid) {
		console.log("user error");
		return res.status(400).json(errors);
	}

	//check and save
	Admin.findOne({ email: req.body.email }).then(existingEmailUser => {
		if (existingEmailUser) {
			console.log("existinguser: ", existingEmailUser);
			if (existingEmailUser.flag) {
				errors.message = "You cannot registered with this email";
				return res.status(403).json(errors);
			} else {
				errors.email = "Email already exists";
				return res.status(208).json(errors);
			}
		} else {
			var body = {};
			body.email = req.body.email;
			body.phone = req.body.phone;
			body.address = req.body.address;
			body.gender = req.body.gender;

			if (req.body.password) body.password = req.body.password;
			if (req.body.role) body.role = req.body.role;
			if (req.body.photoURL) body.photoURL = req.body.photoURL;
			body.name = {};
			if (req.body.firstname) body.name.first = req.body.firstname;
			if (req.body.lastname) body.name.last = req.body.lastname;

			body.geo = {};
			if (req.body.long) body.geo.long = req.body.long;
			if (req.body.latd) body.geo.latd = req.body.latd;

			const newUser = new Admin(body);
			newUser
				.save()
				// .then(user => res.json({ success: true }))
				.then(user => {
					const JWTPayload = {
						id: user.id,
						email: user.email
					};
					//sign Token
					jwt.sign(JWTPayload, JWT_SECRET, { expiresIn: 600 }, (err, token) => {
						if (!err) {
							token = "Bearer " + token;
							console.log(token);
							return res.json({ token });
						} else {
							return res.status(400).error("Cannot proceed");
						}
					});
				})
				.catch(err => console.log(err));
		}
	});
});

// @route:  POST api/users/login
// @desc:   login the user and response the token
// @access: public
router.post("/login", (req, res) => {
	/*
  mandatory parameter:  username, email, password,password2,firstname,lastname
  optional Parameter:   googleID, facebookID, photo, organization, orgAddress
  */

	const { errors, isValid } = validateLoginInput(req.body);
	console.log("login requested");
	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const { email, password } = req.body;
	Admin.findOne({ email }).then(user => {
		if (user) {
			if (user.flag) {
				errors.message = "You cannot registered with this email";
				return res.status(403).json(errors);
			}
			bcrypt.compare(password, user.password, (err, isMatch) => {
				if (isMatch) {
					// user matched
					const JWTPayload = { id: user.id, email: user.email };
					//sign Token
					jwt.sign(
						JWTPayload,
						JWT_SECRET,
						{ expiresIn: 3600 },
						(err, token) => {
							if (!err) {
								res.json({
									success: true,
									token: "Bearer " + token
								});
							} else {
								console.log(err);
							}
						}
					);
				} else {
					//password do not match
					errors.message = "Incorrect Password";
					res.status(404).json(errors);
				}
			});
		} else {
			//no user with such email
			errors.message = "No such email Exists";
			res.status(404).json(errors);
		}
	});
});

// @route:  POST api/users/edit-profile
// @desc:   edit the user profile
// @access: private
router.patch(
	"/edit-profile",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateEditProfileInput(req.body);

		//check validation
		if (!isValid) {
			return res.status(400).json(errors);
		}
		var body = {};
		if (req.body.email) body.email = req.body.email;
		if (req.body.phone) body.phone = req.body.phone;
		if (req.body.address) body.address = req.body.address;
		if (req.body.gender) body.gender = req.body.gender;
		if (req.body.password) body.password = req.body.password;
		if (req.body.ipAddress) body.ipAddress = req.body.ipAddress;
		if (req.body.photoURL) body.photoURL = req.body.photoURL;
		if (req.body.organization) body.organization = req.body.organization;
		if (req.body.position) body.position = req.body.position;
		if (req.body.orgAddress) body.orgAddress = req.body.orgAddress;
		if (req.body.aboutMe) body.aboutMe = req.body.aboutMe;

		body.name = {};
		if (req.body.firstname) body.name.first = req.body.firstname;
		if (req.body.lastname) body.name.last = req.body.lastname;

		body.geo = {};
		if (req.body.long) body.geo.long = req.body.long;
		if (req.body.latd) body.geo.latd = req.body.latd;

		Admin.findByIdAndUpdate(req.user.id, { $set: body }, { new: true })
			.then(profile => res.json(profile))
			.catch(err => {
				res.status(400).send(err);
			});
	}
);

// @route:  POST api/users/current
// @desc:   get the details of currently logged in user
// @access: private
router.delete(
	"/remove-profile",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Admin.findByIdAndUpdate(
			req.user.id,
			{ $set: { flag: true } },
			{ new: true }
		)
			.then(profile => res.json({ success: true }))
			.catch(err => {
				res.status(400).send(err);
			});
	}
);

// @route:  POST api/users/current
// @desc:   get the details of currently logged in user
// @access: private
router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	generateToken,
	(req, res) => {
		const body = _.pick(req.user, [
			"_id",
			"gender",
			"photo",
			"email",
			"phone",
			"address",

			"joinDate"
		]);
		res.json(body);
	}
);

// @route:  POST api/users/username
// @desc:   response the userDetails by each username
// @access: private
router.get("/profile/:uid", (req, res) => {
	const _id = req.params.uid;
	const errors = {};
	Admin.findById(_id).then(user => {
		if (!user) {
			errors.username = "invalid uid";
			return res.status(404).json(errors);
		}
		const body = _.pick(req.user, [
			"_id",
			"gender",
			"photo",
			"email",
			"phone",
			"address",

			"joinDate"
		]);
		res.json(body);
	});
});

// @route:  POST api/users/email
// @desc:   response the userDetails by each email
// @access: private
router.get("/email/:email", (req, res) => {
	const email = req.params.email;
	const errors = {};
	Admin.findOne({ email }).then(user => {
		if (!user) {
			errors.email = "invalid email";
			return res.status(404).json(errors);
		}
		const body = _.pick(req.user, [
			"_id",
			"gender",
			"photo",
			"email",
			"phone",
			"address",

			"joinDate"
		]);
		res.json(body);
	});
});

// @route:  POST api/users/email
// @desc:   response the userDetails by each email
// @access: private
router.get("/firstname/:firstname", (req, res) => {
	const firstname = req.params.firstname;
	const errors = {};

	Admin.find({ "name.first": firstname }).then(user => {
		if (!user) {
			errors.email = "invalid firstname";
			return res.status(404).json(errors);
		}
		res.json(user);
	});
});

// @route:  POST api/users/email
// @desc:   response the userDetails by each email
// @access: private
router.get("/lastname/:lastname", (req, res) => {
	const lastname = req.params.lastname;
	const errors = {};

	Admin.find({ "name.last": lastname }).then(users => {
		if (!users) {
			errors.email = "invalid lastname";
			return res.status(404).json(errors);
		}
		res.json(users);
	});
});

// @route:  POST api/users/email
// @desc:   response the userDetails by each email
// @access: private
router.get(
	"/all",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const errors = {};

		Admin.find().then(users => {
			if (!users) {
				errors.email = "No user found";
				return res.status(404).json(errors);
			}
			res.json(users);
		});
	}
);

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
