const mongoose = require("mongoose");
const validator = require("validator");
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
	flag: {
		type: Boolean,
		default: false
	},
	accountId: String
});

module.exports = User = mongoose.model("user", UserSchema);
