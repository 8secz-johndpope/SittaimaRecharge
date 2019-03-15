const Points = require("../models/UserAccount");

const addPoints = async (user, pointsToBeIncreased) => {
	return Points.findOneAndUpdate(
		user,
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
