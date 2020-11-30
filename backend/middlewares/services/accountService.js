const ErrorHandler = require("../handlers/errorHandler");

const Account = require("../../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ReqError } = require("../../helpers/ReqError");

const RecipeService = require("./recipeService");

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const createAccount = async (userData) => {
  const SALT_ROUNDS = 10;

  const { username, email, password } = userData;

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new account
    const account = new Account({ username, email, passwordHash });

    const response = await account.save();
    return response;
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

const getAccount = async (userToken) => {
  try {
    const accountID = await getAccountID(userToken);

    const account = await Account.findById(accountID);

    return account;
  } catch (error) {
    throw error;
  }
};

const getUserRecipes = async (userToken) => {
  try {
    const accountID = await getAccountID(userToken);

    const accountSeenRecipesObj = await Account.findById(accountID, {
      _id: 0,
      likedRecipes: 1,
      passedRecipes: 1,
    });

    const accountSeenRecipes = [
      ...accountSeenRecipesObj.likedRecipes,
      ...accountSeenRecipesObj.passedRecipes,
    ];

    return accountSeenRecipes;
  } catch (error) {
    throw error;
  }
};

const likeRecipe = async (userToken, recipeID) => {
  try {
    const accountID = await getAccountID(userToken);

    await Account.findByIdAndUpdate(accountID, {
      $addToSet: { likedRecipes: recipeID },
    });

    return { match: true };
  } catch (error) {
    throw error;
  }
};

const passRecipe = async (userToken, recipeID) => {
  try {
    const accountID = await getAccountID(userToken);

    await Account.findByIdAndUpdate(accountID, {
      $addToSet: { passedRecipes: recipeID },
    });

    return { match: false };
  } catch (error) {
    throw error;
  }
};

const getAccountID = (userToken, withRole = false) => {
  try {
    if (!userToken || typeof userToken !== "string") {
      throw new ReqError(
        "A strange error occured, please login and try again.",
        401,
      );
    }

    const { _id: accountID, role } = jwt.verify(userToken, TOKEN_SECRET);

    return !withRole ? accountID : { accountID, role };
  } catch (error) {
    throw error;
  }
};

const getLikedRecipes = async (userToken) => {
  try {
    const accountID = await getAccountID(userToken);

    const account = await Account.findById(accountID);

    const likedRecipes = await RecipeService.getRecipesFromArray(
      account.likedRecipes,
    );

    return likedRecipes;
  } catch (error) {
    throw error;
  }
};

const changeRole = async (accountID, role) => {
  try {
    const account = await Account.findByIdAndUpdate(accountID, {
      role,
    });

    if (!account)
      throw new ReqError(
        "Hey fellow, there is no user with that accountID! Check it and try again.",
        400,
      );

    return { _id: accountID, role };
  } catch (error) {
    throw error;
  }
};

const addRecipe = async (accountID, recipeID) => {
  try {
    await Account.findByIdAndUpdate(accountID, {
      $addToSet: { createdRecipes: recipeID },
    });

    return { _id: accountID, recipeID };
  } catch (error) {
    throw error;
  }
};

const getCreations = async (userToken) => {
  try {
    const accountID = await getAccountID(userToken);

    const account = await Account.findById(accountID);

    const likedRecipes = await RecipeService.getRecipesFromArray(
      account.createdRecipes,
    );

    return likedRecipes;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAccountID,
  createAccount,
  changeRole,
  getAccount,
  getUserRecipes,
  getCreations,
  likeRecipe,
  passRecipe,
  getLikedRecipes,
  addRecipe,
};
