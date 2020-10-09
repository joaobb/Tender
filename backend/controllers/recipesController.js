const getRandomRecipes = async ({ res }) => {
	try {
		const recipes = res.locals.recipes;

		res.json(recipes);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};
const getRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};
const createRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};
const updateRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};

const deleteRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};

const getCuisines = async ({ res }) => {
	try {
		const cuisines = res.locals.cuisines;

		res.json(cuisines);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
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
