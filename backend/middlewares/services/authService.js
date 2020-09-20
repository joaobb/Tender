const Account = require('../../models/Account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const authenticate = async (email, password) => {
	try {
		// Tries to get the account with the same entered email.
		const foundAccount = await Account.findOne({ email });
		if (!foundAccount) throw new Error('Incorrect email address and/or password.');

		// Checks if the inserted password is the same as the one on the found account
		const validPassword = await bcrypt.compare(password, foundAccount.passwordHash);
		if (!validPassword) throw new Error('Incorrect email address and/or password.');

		const { _id, username } = foundAccount;

		// Create and assign a token to the user
		const token = jwt.sign({ _id }, TOKEN_SECRET);

		const user = { _id, username, email };

		return { user, token };
	} catch (err) {}
};

module.exports = {
	authenticate,
};
