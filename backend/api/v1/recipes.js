const express = require("express");

const Controller = require("../../controllers/recipesController");
const Handler = require("../../middlewares/handlers/recipeHandler");
const AuthHandler = require("../../middlewares/handlers/authHandler");
const roles = require("../../utils/enums/role.enum");

const router = express.Router();

router.get(
  "/",
  AuthHandler.handleAuthorization(),
  Handler.handleGetRandomRecipes,
  Controller.getRandomRecipes,
);

router.get(
  "/cuisines",
  AuthHandler.handleAuthorization(),
  Handler.handleGetCuisines,
  Controller.getCuisines,
);

router.get(
  "/:id",
  AuthHandler.handleAuthorization(),
  Handler.handleGetRecipe,
  Controller.getRecipe,
);

router.post(
  "/",
  AuthHandler.handleAuthorization(roles.CREATOR),
  Handler.handleCreate,
  Controller.createRecipe,
);

router.put(
  "/:id?",
  AuthHandler.handleAuthorization(roles.CREATOR),
  Handler.handleUpdate,
  Controller.updateRecipe,
);

router.delete(
  "/:id?",
  AuthHandler.handleAuthorization(roles.CREATOR),
  Handler.handleDelete,
  Controller.deleteRecipe,
);

module.exports = router;
