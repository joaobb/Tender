const ErrorHandler = require("../handlers/errorHandler");
const { ReqError } = require("../../helpers/ReqError");

const AccountService = require("../services/accountService.js");

const handleLike = async (req, res, next) => {
  try {
    const recipeID = req.params.recipeID;
    if (!recipeID || recipeID.trim() === "")
      throw new ReqError("Please send the recipe ID you want to like.", 400);

    const userToken = req.header("Authorization");

    const response = await AccountService.likeRecipe(userToken, recipeID);
    res.locals["swipe"] = response;

    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};
const handlePass = async (req, res, next) => {
  try {
    const recipeID = req.params.recipeID;
    if (!recipeID || recipeID.trim() === "")
      throw new ReqError("Please send the recipe ID you want to pass on.", 400);

    const userToken = req.header("Authorization");

    const response = await AccountService.passRecipe(userToken, recipeID);
    res.locals["swipe"] = response;

    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

module.exports = {
  handleLike,
  handlePass,
};
