const { ReqError } = require('../../helpers/ReqError');
const ErrorHandler = require('../handlers/errorHandler');

const AccountService = require('../services/accountService');
const Account = require('../../models/Account');

const { registerValidation } = require('../services/validationService');

const handleCreateAccount = async (req, res, next) => {
	try {
		const body = req.body;
		await registerValidation(body);
	} catch (error) {
		return ErrorHandler.handleError(req, res, error);
	}

	const { username, email, password } = req.body;

	// Check for email or username duplicates
	try {
		const duplicateAccount = await Account.findOne({ $or: [{ email }, { username }] });
		if (duplicateAccount) {
			if (duplicateAccount.username === username)
				throw new ReqError('An user with this username already exists in the system.', 400);
			if (duplicateAccount.email === email)
				throw new ReqError('An user with this email already exists in the system.', 400);
		}

		const response = await AccountService.createAccount({ username, email, password });

		res.locals['account'] = response;
		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleGetAccount = async (req, res, next) => {
	try {
		const userToken = req.header('Authorization');

		const response = await AccountService.getAccount(userToken);

		res.locals['account'] = response;
		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

module.exports = {
	handleCreateAccount,
	handleGetAccount,
};
