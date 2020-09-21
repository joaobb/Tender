const jwt = require('jsonwebtoken');

const { ReqError } = require('../../helpers/ReqError');
const ErrorHandler = require('../handlers/errorHandler');

const AuthService = require('../services/authService');
const { authValidation } = require('../services/validationService');

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const handleAuthorization = (req, res, next) => {
	try {
		const authToken = req.header('Authorization');

		if (!authToken) throw new ReqError('No token was provided, please sign in again.', 401);

		let verified;

		try {
			verified = jwt.verify(authToken, TOKEN_SECRET);
		} catch (error) {
			throw new ReqError('Your token is invalid, please login again.', 401);
		}

		req.user = verified;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleLogin = async (req, res, next) => {
	try {
		// Validate user entries
		await authValidation(req.body);

		const { email, password } = req.body;

		const response = await AuthService.authenticate(email, password);
		res.locals['account'] = response;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

module.exports = {
	handleAuthorization,
	handleLogin,
};
