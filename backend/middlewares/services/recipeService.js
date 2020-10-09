const { ReqError } = require('../../helpers/ReqError');
const Recipe = require('../../models/Recipe');

const getRandomRecipes = async (randomQtd, fullInfo, accountSeenRecipes) => {
	try {
		const randomRecipes = await Recipe.aggregate([
			{ $match: { _id: { $nin: accountSeenRecipes } } },
			{ $sample: { size: randomQtd } },
			{ $project: { cooking_method: 0, author_id: 0, creation_date: 0 } },
		]);
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

const createRecipe = async (body, accountID) => {
	try {
		const recipe = new Recipe({ ...body, author_id: accountID });

		const savedRecipe = await recipe.save();
		return savedRecipe;
	} catch (err) {
		throw err;
	}
};

const updateRecipe = async (recipeID, body, accountID) => {
	try {
		let query = { _id: recipeID, author_id: accountID };
		const recipe = await Recipe.findOneAndUpdate(query, { ...body });

		if (!recipe)
			throw new ReqError(
				"Either the selected recipe doesn't exist or you don't have the authorization to edit it.",
				400
			);

		return recipe;
	} catch (err) {
		throw err;
	}
};

const deleteRecipe = async (recipeID, accountID) => {
	try {
		const query = { _id: recipeID, author_id: accountID };
		const recipe = await Recipe.findOneAndRemove(query);

		if (!recipe)
			throw new ReqError(
				"Either the selected recipe doesn't exist or you don't have the authorization to delete it.",
				400
			);

		return recipe;
	} catch (err) {
		throw err;
	}
};

const getCuisines = async () => {
	try {
		let cuisines = await Recipe.aggregate([
			{
				$unwind: {
					path: '$cuisine',
					preserveNullAndEmptyArrays: true,
				},
			},
			{
				$group: {
					_id: null,
					uniqueCuisines: {
						$addToSet: '$cuisine',
					},
				},
			},
		]);

		cuisines = cuisines[0].uniqueCuisines.map((cuisine) => cuisine.replace(/'/g, ''));

		return cuisines;
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
	getCuisines,
};
