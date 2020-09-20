const Recipe = require('../../models/Recipe');

const getRandomRecipes = async (randomQtd, fullInfo) => {
	try {
		const randomRecipes = await Recipe.aggregate([{ $sample: { size: randomQtd } }]);
		return randomRecipes;
	} catch (err) {
		throw err;
	}
};

const getRecipe = async (recipeID) => {
	try {
		const recipe = await Recipe.findById(recipeID);
		return recipe;
	} catch (err) {
		throw err;
	}
};

const createRecipe = async (body) => {
	try {
		const recipe = new Recipe({ ...body });

		const savedRecipe = await recipe.save();
		return savedRecipe;
	} catch (err) {
		throw err;
	}
};

const updateRecipe = async (recipeID, body) => {
	try {
		const patchedRecipe = new Recipe({ ...body });
		const updatedRecipe = await Recipe.findByIdAndUpdate(recipeID, patchedRecipe);

		return updatedRecipe;
	} catch (err) {
		throw err;
	}
};

const deleteRecipe = async (recipeID) => {
	try {
		const deletedRecipe = await Recipe.findByIdAndRemove(recipeID);

		return deletedRecipe;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	getRandomRecipes,
	getRecipe,
	createRecipe,
	updateRecipe,
	deleteRecipe,
};
