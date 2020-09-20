const express = require('express');
const router = express.Router();

const Handler = require('../../middlewares/handlers/authHandler');
const Controller = require('../../controllers/loginController');

// Account login.
router.post('/', Handler.handleLogin, Controller.login);

module.exports = router;

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const Account = require('../../models/Account');
// const { authValidation } = require('../../middlewares/services/validationService');

// const TOKEN_SECRET = process.env.TOKEN_SECRET;

// async (req, res, next) => {
// 	// Validate user entries
// 	try {
// 		await authValidation(req.body);
// 	} catch (err) {
// 		return res.status(400).json({ message: err.message });
// 	}

// 	const { email, password } = req.body;

// 	// Tries to get the account with the same entered email.
// 	const foundAccount = await Account.findOne({ email });
// 	if (!foundAccount) {
// 		return res.status(400).json({ message: 'Incorrect email address and/or password.' });
// 	}

// 	// Checks if the inserted password is the same as the one on the found account
// 	const validPassword = await bcrypt.compare(password, foundAccount.passwordHash);
// 	if (!validPassword) return res.status(400).json({ message: 'Incorrect email address and/or password.' });

// 	const { _id, username } = foundAccount;

// 	// Create and assing a token
// 	const token = jwt.sign({ _id: foundAccount._id }, TOKEN_SECRET);

// 	// Send it back to the user with some data about it
// 	res.header('Authentication', token).send({ user: { _id, username, email }, token });
// });
