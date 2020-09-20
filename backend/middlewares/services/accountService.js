const Account = require('../../models/Account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const createAccount = async (userData) => {
	const SALT_ROUNDS = 10;

	const { username, email, password } = userData;

	try {
		// Hash the password
		const salt = await bcrypt.genSalt(SALT_ROUNDS);
		const passwordHash = await bcrypt.hash(password, salt);

		// Create a new account
		const account = new Account({ username, email, passwordHash });

		const response = await account.save();
		return response;
	} catch (err) {
		throw err;
	}
};
const getAccount = (userToken) => {
	try {
		const accountID = jwt.verify(userToken, TOKEN_SECRET)._id;

		const account = Account.findById(accountID);

		return account;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createAccount,
	getAccount,
};
