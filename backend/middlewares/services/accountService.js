const ErrorHandler = require('../handlers/errorHandler');

const Account = require('../../models/Account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ReqError } = require('../../helpers/ReqError');

const Recipes = require('./recipeService');

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

const getAccount = async (userToken) => {
	try {
		const accountID = await getAccountID(userToken);

		const account = await Account.findById(accountID);

		return account;
	} catch (error) {
		throw error;
	}
};

const getUserRecipes = async (userToken) => {
	try {
		const accountID = await getAccountID(userToken);

		const accountSeenRecipesObj = await Account.findById(accountID, {
			_id: 0,
			likedRecipes: 1,
			passedRecipes: 1,
		});

		const accountSeenRecipes = [...accountSeenRecipesObj.likedRecipes, ...accountSeenRecipesObj.passedRecipes];

		return accountSeenRecipes;
	} catch (error) {
		throw error;
	}
};

const likeRecipe = async (userToken, recipeID) => {
	try {
		const accountID = await getAccountID(userToken);

		await Account.findByIdAndUpdate(accountID, { $addToSet: { likedRecipes: recipeID } });

		return { match: true };
	} catch (error) {
		throw error;
	}
};

const passRecipe = async (userToken, recipeID) => {
	try {
		const accountID = await getAccountID(userToken);

		await Account.findByIdAndUpdate(accountID, { $addToSet: { passedRecipes: recipeID } });

		return { match: false };
	} catch (error) {
		throw error;
	}
};

const getAccountID = (userToken) => {
	try {
		if (!userToken || typeof userToken !== 'string') {
			throw new ReqError('A strange error occured, please login and try again.', 401);
		}
		const accountID = jwt.verify(userToken, TOKEN_SECRET)._id;

		return accountID;
	} catch (error) {
		throw error;
	}
};

const getLikedRecipes = async (userToken) => {
	try {
		const accountID = await getAccountID(userToken);

		const account = await Account.findById(accountID);

		const likedRecipes = await Recipes.getRecipesFromArray(account.likedRecipes);

		return likedRecipes;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAccountID,
	createAccount,
	getAccount,
	getUserRecipes,
	likeRecipe,
	passRecipe,
	getLikedRecipes,
};
