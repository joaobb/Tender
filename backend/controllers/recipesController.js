const getRandomRecipes = async ({ res }) => {
	try {
		const recipes = res.locals.recipes;

		res.json(recipes);
	} catch (err) {
		res.json({ message: err.message });
	}
};
const getRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (err) {
		res.json({ message: err.message });
	}
};
const createRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (err) {
		res.json({ message: err.message });
	}
};
const updateRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (err) {
		res.json({ message: err.message });
	}
};

const deleteRecipe = async ({ res }) => {
	try {
		const recipe = res.locals.recipe;

		res.json(recipe);
	} catch (err) {
		res.json({ message: err.message });
	}
};

module.exports = {
	getRandomRecipes,
	getRecipe,
	createRecipe,
	updateRecipe,
	deleteRecipe,
};
