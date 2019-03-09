// import npm modules
const express = require("express");
const mongoose = require("mongoose");

//import local modules

// define global variables
const app = express();
const PORT = process.env.PORT || 5000;
const mongoDB = require("./config/key").MONGODB_URI;

mongoose
	.connect(mongoDB, { useNewUrlParser: true })
	.then(() => console.log("connected to mongoDB local"))
	.catch(err => console.log(err));

require("./models/User");

//middlewares
require("./middlewares/middlewares")(app);

//routes
require("./routes/")(app); //all routes

//if client ask for any file or assets
if (process.env.NODE_ENV === "production") {
	// Express will serve up production assetes
	// Like our main .js file r main.css file!
	app.use(express.static("client/build"));

	// Express will serve up the index.html file
	// if it doesnot recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

//booted up the server
app.listen(PORT, err => {
	if (err) return console.log(err);
	console.log(`Server is up @ ${PORT} port.`);
});
