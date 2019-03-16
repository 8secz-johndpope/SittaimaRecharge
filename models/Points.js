const mongoose = require("mongoose");
const { Schema } = mongoose;

const PointSchema = Schema({
	latest: {
		type: Boolean,
		default: true
	},
	refer: {
		type: Number,
		default: 0
	},
	inviteAndEarn: {
		type: Number,
		default: 0
	},
	playAndEarn: {
		type: Number,
		default: 0
	},
	DailyLoginReward: {
		type: Number,
		default: 0
	}
});
module.exports = Point = mongoose.model("point", PointSchema);
