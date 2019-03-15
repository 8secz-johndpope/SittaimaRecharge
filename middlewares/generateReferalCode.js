const { JWT_SECRET } = require("../config/key");
const jwt = require("jsonwebtoken");
var voucher_codes = require("voucher-code-generator");

module.exports = async email => {
	const prefix =
		email
			.split("@")[0]
			.substring(0, 3)
			.toUpperCase() + "-";
	console.log(prefix);
	const symbol = ["!", "@", "#", "$", "%", "^", "&", "?"];
	const min = 0;
	const max = 7;
	const randomInteger = Math.floor(Math.random() * (+max - +min)) + +min;
	const postfix = symbol[randomInteger];
	const voucherPayload = {
		length: 5,
		count: 1,
		charset: voucher_codes.charset("alphanumeric"),
		prefix,
		postfix
	};

	const referalCode = await voucher_codes.generate(voucherPayload);
	return referalCode[0];
};
