const Points = require("../models/Points");

const fetchAllPoints = async () => {
	return Points.findOne({ latest: true })
		.then(result => {
			return result;
		})
		.catch(err => {});
};

module.exports = { fetchAllPoints };
