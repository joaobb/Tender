const AccountService = require('../services/accountService');
const Account = require('../../models/Account');

const { registerValidation } = require('../services/validationService');

const handleCreateAccount = async (req, res, next) => {
	try {
		const body = req.body;
		await registerValidation(body);
	} catch (error) {
		throw err;
	}

	const { username, email, password } = req.body;

	// Check for email or username duplicates
	const duplicateAccount = await Account.findOne({ $or: [{ email }, { username }] });
	if (duplicateAccount) {
		if (duplicateAccount.username === username)
			throw new Error('An user with this username already exists in the system.');
		if (duplicateAccount.email === email) throw new Error('An user with this email already exists in the system.');
	}

	try {
		const response = await AccountService.createAccount({ username, email, password });

		res.locals['account'] = response;
		next();
	} catch (error) {
		throw err;
	}
};

const handleGetAccount = async (req, res, next) => {
	try {
		const userToken = req.header('Authorization');

		const response = await AccountService.getAccount(userToken);

		res.locals['account'] = response;
		next();
	} catch (error) {
		console.log('ERROR HANDLER');
		throw err;
	}
};

module.exports = {
	handleCreateAccount,
	handleGetAccount,
};
