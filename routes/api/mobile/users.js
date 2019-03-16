const router = require("express").Router();
const User = require("../../../models/User");
const ReferalCode = require("../../../models/UserReferalCode");
const _ = require("lodash");
const passport = require("passport");
const generateToken = require("../../../middlewares/generateToken");
const generateReferalCode = require("../../../middlewares/generateReferalCode");
const { addPoints } = require("../../../middlewares/Points");
const { fetchAllPoints } = require("../../../middlewares/fetchDBPoints");
var mongoose = require("mongoose");

// @route:  POST api/users/login
// @desc:   login the user and response the token
// @access: public
var allPoints = fetchAllPoints();
router.get(
	"/reffered/:referalCode",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		var errors = {};
		const referalCode = req.params.referalCode; //userle rakheko referal code paisa pauna ko lagi
		const user = req.user._id; //requested user ko id
		try {
			const usereferal = await ReferalCode.findOne({ referalCode }); //find the id of user jasko referal code use gareko xa
			if (!usereferal) {
				//referal code kasai sanga ni match navaesi
				errors.referal = "Invalid Referal Code";
				return res.status(404).json(errors); //throw errors
			}
			ReferalCode.findOneAndUpdate(
				{ user },
				{ $set: { referredvia: usereferal._id } }
			) //tyo userko referal document find gar
				.then(async result => {
					// increase the points  of the user who invites
					await addPoints(usereferal._id, allPoints.inviteAndEarn);
					await addPoints(user, allPoints.refer);
					res.json({ success: true });
				})
				.catch(err => {});
		} catch (error) {}
	}
);

// @route:  POST api/users/login
// @desc:   login the user and response the token
// @access: public
router.get(
	"/referalCode",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const user = req.user._id;
		const ifReferal = await ReferalCode.findOne({ user });
		if (ifReferal) {
			return res.json({ success: true, referalCode: ifReferal.referalCode });
		} else {
			var referalCodeBody = {};

			referalCodeBody.user = user;
			const email = req.user.email;
			try {
				referalCodeBody.referalCode = await generateReferalCode(email);
				const referalCode = await new ReferalCode(referalCodeBody).save();
				if (referalCodeBody.referalCode) {
					return res.json({
						success: true,
						referalCode: referalCodeBody.referalCode
					});
				} else res.json({ success: false });
			} catch (error) {}
		}
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
