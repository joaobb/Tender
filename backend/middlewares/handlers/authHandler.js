const { response } = require('express');
const jwt = require('jsonwebtoken');

const AuthService = require('../services/authService');
const { authValidation } = require('../services/validationService');

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const handleAuthorization = (req, res, next) => {
	try {
		const authToken = req.header('Authorization');
		if (!authToken) throw new Error('Access Denied');

		const verified = jwt.verify(authToken, TOKEN_SECRET);
		req.user = verified;

		next();
	} catch (error) {
		res.status(401).json({ message: error.message });
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
		res.status(401).json({ message: error.message });
	}
};

module.exports = {
	handleAuthorization,
	handleLogin,
};
