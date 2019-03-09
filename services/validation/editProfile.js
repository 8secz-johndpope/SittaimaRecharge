const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = data => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";

  data.organization = !isEmpty(data.organization) ? data.organization : "";
  data.position = !isEmpty(data.position) ? data.position : "";
  data.orgAddress = !isEmpty(data.orgAddress) ? data.orgAddress : "";

  if (!validator.isLength(data.username, { min: 5, max: 30 })) {
    errors.username = "Username must be between 5 and 30 characters";
  }
  if (validator.isEmpty(data.username)) {
    erros.username = "Username field is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // if (validator.isEmpty(data.password)) {
  //   errors.password = "Password field is required";
  // }

  if (data.password) {
    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  // if (validator.isEmpty(data.password2)) {
  //   errors.password2 = "Confirm Password field is required";
  // }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
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
  if (!validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = "firstname must be at least 2 characters";
  }
  if (!validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = "lastname must be at least 2 characters";
  }
  if (
    !(
      data.gender === "male" ||
      data.gender === "female" ||
      data.gender === "other"
    )
  ) {
    errors.gender = "Gender is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
