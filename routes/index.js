const mobileUser = require("./api/mobile/users");
const adminUser = require("./api/admin/users");

module.exports = app => {
	app.use("/api/mobile/users", mobileUser);
	app.use("/api/admin/users", adminUser);
};
