const mobileUser = require("./api/mobile/users");
const adminUser = require("./api/admin/users");
const google = require("./auth/google");

module.exports = app => {
	app.use("/api/mobile/users", mobileUser);
	require("./auth/google")(app); //google auth routes
	app.use("/api/admin/users", adminUser);
};
