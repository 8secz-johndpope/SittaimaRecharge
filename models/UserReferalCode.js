const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const ReferalCodeSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user"
	},
	referredvia: {
		type: Schema.Types.ObjectId,
		ref: "user"
	},
	referalCode: {
		type: String,
		required: true,
		unique: true,
		trim: true
	}
});
module.exports = ReferalCode = mongoose.model("referalCode", ReferalCodeSchema);
