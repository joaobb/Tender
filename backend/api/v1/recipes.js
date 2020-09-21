const express = require('express');

const Controller = require('../../controllers/recipesController');
const Handler = require('../../middlewares/handlers/recipeHandler');
const AuthHandler = require('../../middlewares/handlers/authHandler');

const router = express.Router();

router.get('/', AuthHandler.handleAuthorization, Handler.handleGetRandomRecipes, Controller.getRandomRecipes);
router.get('/:id', AuthHandler.handleAuthorization, Handler.handleGetRecipe, Controller.getRecipe);
router.post('/', AuthHandler.handleAuthorization, Handler.handleCreate, Controller.createRecipe);
router.patch('/:id?', AuthHandler.handleAuthorization, Handler.handleUpdate, Controller.updateRecipe);
router.delete('/:id?', AuthHandler.handleAuthorization, Handler.handleDelete, Controller.deleteRecipe);

module.exports = router;
