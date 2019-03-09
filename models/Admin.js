const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const AdminSchema = Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		validate: {
			validator: validator.isEmail
		}
	},
	password: String,
	name: {
		first: {
			type: String,
			// required: true,
			trim: true,
			minlength: 1
		},
		last: {
			type: String,
			// required: true,
			trim: true,
			minlength: 1
		}
	},
	gender: {
		type: String,
		required: true,
		default: null
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		default: "photo_url"
	},
	aboutMe: String,
	geocode: {
		latd: Number,
		long: Number
	},
	ipAddress: String,
	joinDate: {
		type: Date,
		default: Date.now
	},
	role: Number,
	flag: {
		type: Boolean,
		default: false
	}
});

AdminSchema.pre("save", function(next) {
	let user = this;
	if (user.isModified("password")) {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hashed) => {
				user.password = hashed;
				next();
			});
		});
	} else {
		next();
	}
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
