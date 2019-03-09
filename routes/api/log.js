const router = require("express").Router();
const Log = require("../../models/Log");

router.get("/all/:page/:limit", (req, res) => {
	const page = parseInt(req.params.page) || 1;
	const limit = parseInt(req.params.limit) || 10;
	var options = {
		select: "message",
		sort: { date: 1 },
		page,
		limit
	};
	Log.paginate({}, options).then(result => {
		res.json(result);
	});
});
module.exports = router;
