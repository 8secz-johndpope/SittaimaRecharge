const Points = require("../models/UserAccount");

const addPoints = async (userId, pointsToBeIncreased) => {
	return Points.findOneAndUpdate(
		{ user: userId },
		{
			$inc: { currentPoints: pointsToBeIncreased }
		},
		{ new: true }
	)
		.then(result => {
			return true;
		})
		.catch(err => {});
};

module.exports = { addPoints };
