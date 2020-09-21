const ErrorHandler = require('../handlers/errorHandler');

const RecipeService = require('../services/recipeService.js');

const handleGetRandomRecipes = async (req, res, next) => {
	try {
		const randomQtd = Number(req.query.qtd) || 10;
		const fullInfo = Boolean(req.query.fullInfo === 'true');

		const response = await RecipeService.getRandomRecipes(randomQtd, fullInfo);

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

		const response = await RecipeService.createRecipe(body);

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

		const response = await RecipeService.updateRecipe(recipeID, body);

		res.locals['recipe'] = response;

		next();
	} catch (error) {
		ErrorHandler.handleError(req, res, error);
	}
};

const handleDelete = async (req, res, next) => {
	try {
		const recipeID = req.params.id;

		const response = await RecipeService.deleteRecipe(recipeID);

		res.locals['recipe'] = response;

		next();
	} catch (error) {
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
