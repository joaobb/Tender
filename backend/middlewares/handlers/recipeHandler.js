const ErrorHandler = require('../handlers/errorHandler');

const RecipeService = require('../services/recipeService.js');

const { getAccountID, getUserRecipes } = require('../services/accountService');

const handleGetRandomRecipes = async (req, res, next) => {
	try {
		const randomQtd = Number(req.query.qtd) || 10;
		const fullInfo = Boolean(req.query.fullInfo === 'true');

		const userToken = req.header('Authorization');

		const accountSeenRecipes = await getUserRecipes(userToken);

		const response = await RecipeService.getRandomRecipes(randomQtd, fullInfo, accountSeenRecipes);

		res.locals['recipes'] = response;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleGetRecipe = async (req, res, next) => {
	try {
		const recipeID = req.params.id;

		const response = await RecipeService.getRecipe(recipeID);

		res.locals['recipe'] = response;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleCreate = async (req, res, next) => {
	try {
		const body = req.body;
		const userToken = req.header('Authorization');

		const accountID = getAccountID(userToken);

		const response = await RecipeService.createRecipe(body, accountID);

		res.locals['recipe'] = response;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleUpdate = async (req, res, next) => {
	try {
		const recipeID = req.params.id;
		const body = req.body;
		const userToken = req.header('Authorization');

		const accountID = getAccountID(userToken);

		const response = await RecipeService.updateRecipe(recipeID, body, accountID);

		res.locals['recipe'] = response;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleDelete = async (req, res, next) => {
	try {
		const recipeID = req.params.id;
		const userToken = req.header('Authorization');

		const accountID = getAccountID(userToken);

		const response = await RecipeService.deleteRecipe(recipeID, accountID);

		res.locals['recipe'] = response;

		next();
	} catch (error) {
		console.error(error);

		ErrorHandler.handleError(req, res, error);
	}
};

module.exports = {
	handleGetRandomRecipes,
	handleGetRecipe,
	handleCreate,
	handleUpdate,
	handleDelete,
};
