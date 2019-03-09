const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const UserSchema = Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		validate: {
			validator: validator.isEmail
		}
	},
	age: {
		type: Number
	},
	name: {
		first: {
			type: String,
			trim: true,
			minlength: 1
		},
		last: {
			type: String,
			trim: true,
			minlength: 1
		}
	},
	gender: String,
	joinDate: {
		type: Date,
		default: Date.now
	},
	geo: {
		lat: Number,
		lng: Number
	},
	referalCode: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	flag: {
		type: Boolean,
		default: false
	}
});

UserSchema.pre("save", function(next) {
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

module.exports = User = mongoose.model("user", UserSchema);
