const mongoose = require("mongoose");

const { ReqError } = require("../../helpers/ReqError");
const Recipe = require("../../models/Recipe");
const roles = require("../../utils/enums/role.enum");

const cloudinaryService = require("./cloudinaryService");

const getRandomRecipes = async (randomQtd, fullInfo, accountSeenRecipes) => {
  try {
    const randomRecipes = await Recipe.aggregate([
      { $match: { _id: { $nin: accountSeenRecipes } } },
      { $sample: { size: randomQtd } },
      { $project: { cooking_method: 0, author_id: 0, creation_date: 0 } },
    ]);

    const a = await Recipe.count()

    console.log(a);

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
    const { image } = body;

    const imageURL = await cloudinaryService.uploadBase64(image);

    const recipe = new Recipe({
      ...body,
      author_id: accountID,
      image: imageURL,
    });

    const savedRecipe = await recipe.save();
    return savedRecipe;
  } catch (err) {
    throw err;
  }
};

const updateRecipe = async (recipeID, body, role, accountID) => {
  try {
    if (role === roles.USER)
      throw new ReqError(
        "Oh no! It seems like you don't have the permission to do this kind of things, but still your trying (▀̿̿Ĺ̯̿▀̿ ̿).",
        400,
      );

    const query = {
      _id: recipeID,
      accountID: role === roles.CREATOR ? accountID : undefined,
    };

    const recipe = await Recipe.findOneAndUpdate(query, { ...body });

    if (!recipe)
      throw new ReqError(
        "Either the selected recipe doesn't exist or you don't have the authorization to edit it.",
        400,
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
        400,
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
          path: "$cuisine",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: null,
          uniqueCuisines: {
            $addToSet: "$cuisine",
          },
        },
      },
    ]);

    if (cuisines.length) {
      cuisines = cuisines[0].uniqueCuisines.map((cuisine) =>
        cuisine.replace(/'/g, ""),
      );
    }

    return cuisines;
  } catch (err) {
    throw err;
  }
};

const getRecipesFromArray = async (recipesIDs = []) => {
  try {
    const recipes = Recipe.aggregate([
      { $match: { _id: { $in: recipesIDs } } },
      {
        $project: {
          cooking_method: 0,
          author_id: 0,
          creation_date: 0,
          ingredients: 0,
        },
      },
    ]);

    return recipes;
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
  getRecipesFromArray,
};
