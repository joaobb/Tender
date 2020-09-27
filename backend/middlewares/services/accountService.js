const ErrorHandler = require('../handlers/errorHandler');

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
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const getAccount = (userToken) => {
	try {
		const accountID = getAccountID(userToken);

		const account = Account.findById(accountID);

		return account;
	} catch (error) {
		throw error;
	}
};

const likeReceipe = async (userToken, recipeID) => {
	try {
		const accountID = getAccountID(userToken);

		await Account.findByIdAndUpdate(accountID, { $addToSet: { likedRecipes: recipeID } });

		return { match: true };
	} catch (error) {
		throw error;
	}
};

const passReceipe = async (userToken, recipeID) => {
	try {
		const accountID = getAccountID(userToken);

		await Account.findByIdAndUpdate(accountID, { $addToSet: { passedRecipes: recipeID } });

		return { match: false };
	} catch (error) {
		throw error;
	}
};

const getAccountID = (userToken) => {
	try {
		const accountID = jwt.verify(userToken, TOKEN_SECRET)._id;

		return accountID;
	} catch (error) {
		throw errro;
	}
};

module.exports = {
	getAccountID,
	createAccount,
	getAccount,
	likeReceipe,
	passReceipe,
};
