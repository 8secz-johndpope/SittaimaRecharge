const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = data => {
	let errors = {};

	data.username = !isEmpty(data.username) ? data.username : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
	data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
	data.gender = !isEmpty(data.gender) ? data.gender : "";
	data.role = !isEmpty(data.role) ? data.role : "";

	if (validator.isEmpty(data.email)) {
		errors.email = "Email field is required";
	}

	if (!validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	if (validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}

	if (!validator.isLength(data.password, { min: 4, max: 30 })) {
		errors.password = "Password must be at least 4 characters";
	}

	// if (validator.isEmpty(data.password2)) {
	// 	errors.password2 = "Confirm Password field is required";
	// }

	if (validator.isEmpty(data.password)) {
		errors.password = "password field is required";
	}
	if (validator.isEmpty(data.firstname)) {
		errors.firstname = "firstname field is required";
	}
	if (validator.isEmpty(data.lastname)) {
		errors.lastname = "lastname field is required";
	}
	if (validator.isEmpty(data.gender)) {
		errors.gender = "gender field is required";
	}
	// if (!validator.isLength(data.firstname, { min: 6, max: 30 })) {
	// 	errors.firstname = "firstname must be at least 6 characters";
	// }
	// if (!validator.isLength(data.lastname, { min: 6, max: 30 })) {
	// 	errors.lastname = "lastname must be at least 6 characters";
	// }
	if (
		!(
			data.gender === "male" ||
			data.gender === "female" ||
			data.gender === "third_gender"
		)
	) {
		errors.gender = "Gender is invalid";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
