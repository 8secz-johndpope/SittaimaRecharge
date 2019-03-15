const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const UserAccountSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user"
	},
	currentPoints: {
		type: Number,
		default: 0
	},
	currentBalance: {
		type: Number,
		default: 0
	},
	totalPoints: [
		{
			fromDate: Date,
			toDate: Date,
			points: {
				type: Number,
				default: 0
			},
			equivalentBalance: {
				type: Number,
				default: 0
			},
			admin: {
				//kun adminle points lai balance ma update gareko
				type: Schema.Types.ObjectId,
				ref: "admin"
			}
		}
	]
});

module.exports = UserAccount = mongoose.model("useraccount", UserAccountSchema);
