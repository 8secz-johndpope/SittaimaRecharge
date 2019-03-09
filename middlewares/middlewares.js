const bodyParser = require("body-parser");
const passport = require("passport");

module.exports = app => {
	app.use(
		bodyParser.urlencoded({
			extended: false
		})
	);
	app.use(bodyParser.json());

	//passport middleware config
	app.use(passport.initialize());
	require("./passport")(passport);
};
