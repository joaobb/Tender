var express = require('express');
var router = express.Router();

var recipes = {};

/* GET recipes listing. */
router.get('/', function (req, res, next) {
	console.log(req.query);
	console.log(recipes);
	res.json(recipes);
});

/* GET specific recipe. */
router.get('/:id', function (req, res, next) {
	const recipeId = req.params.id;
	res.json(recipes[recipeId]);
});

/* GET specific's recipe short info. */
router.get('/:id/short_info', function (req, res, next) {
	const recipeId = req.params.id;
	res.json(recipes[recipeId]);
});

/* POST a new recipe. */
router.post('/', function (req, res, next) {
	const { title, category } = req.body;
	const randomId = String(Math.random()).slice(2);

	recipes[randomId] = {
		title,
		category,
	};

	res.json(recipes[randomId]);
});

/* PUT a different info on a recipe. */
router.put('/:id', function (req, res, next) {
	const { title, category } = req.body;
	const recipeId = req.params.id;

	recipes[recipeId] = {
		title,
		category,
	};

	res.json(recipes[recipeId]);
});

module.exports = router;
