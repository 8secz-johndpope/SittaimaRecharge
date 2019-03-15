const router = require("express").Router();
const User = require("../../../models/User");
const ReferalCode = require("../../../models/UserReferalCode");
const _ = require("lodash");
const passport = require("passport");
const generateToken = require("../../../middlewares/generateToken");
const generateReferalCode = require("../../../middlewares/generateReferalCode");
var mongoose = require("mongoose");

// @route:  POST api/users/login
// @desc:   login the user and response the token
// @access: public
router.get(
	"/reffered/:referalCode",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const referalCode = req.params.referalCode;
		const user = req.user;
		ReferalCode.findOne({})
			.then(result => {})
			.catch(err => {});
	}
);

// @route:  POST api/users/login
// @desc:   login the user and response the token
// @access: public
router.get(
	"/referalCode",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		var referalCodeBody = {};

		referalCodeBody.user;
		const email = req.params.email;
		generateReferalCode(email)
			.then(referalCode => {
				if (referalCode) {
				}
			})
			.catch(err => {});
	}
);

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
