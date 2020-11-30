const mongoose = require("mongoose");

const { ReqError } = require("../../helpers/ReqError");
const ErrorHandler = require("../handlers/errorHandler");

const AccountService = require("../services/accountService");
const Account = require("../../models/Account");
const roles = require("../../utils/enums/role.enum");
const { registerValidation } = require("../services/validationService");
const { string } = require("joi");

const handleCreateAccount = async (req, res, next) => {
  try {
    const body = req.body;
    await registerValidation(body);
  } catch (error) {
    return ErrorHandler.handleError(req, res, error);
  }

  const { username, email, password } = req.body;

  // Check for email or username duplicates
  try {
    const duplicateAccount = await Account.findOne({
      $or: [{ email }, { username }],
    });
    if (duplicateAccount) {
      if (duplicateAccount.username === username)
        throw new ReqError(
          "An user with this username already exists in the system.",
          400,
        );
      if (duplicateAccount.email === email)
        throw new ReqError(
          "An user with this email already exists in the system.",
          400,
        );
    }

    const response = await AccountService.createAccount({
      username,
      email,
      password,
    });

    res.locals["account"] = response;
    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

const handleGetAccount = async (req, res, next) => {
  try {
    const userToken = req.header("Authorization");

    const response = await AccountService.getAccount(userToken);

    res.locals["account"] = response;
    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

const handleGetLiked = async (req, res, next) => {
  try {
    const userToken = req.header("Authorization");

    const response = await AccountService.getLikedRecipes(userToken);

    res.locals["likedRecipes"] = response;

    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

const handleGetCreations = async (req, res, next) => {
  try {
    const userToken = req.header("Authorization");

    const response = await AccountService.getCreations(userToken);

    res.locals["creations"] = response;

    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

const handleRoleChange = async (req, res, next) => {
  try {
    const { accountID, role } = req.body;

    if (!accountID || (typeof accountID === "string" && !accountID.trim()))
      throw new ReqError(
        "No accountID was informed, do you want me to guess one??",
        400,
      );

    if (!Object.values(roles).includes(role))
      throw new ReqError(
        "The given role is invalid! Are you even a real admin? (▀̿̿Ĺ̯̿▀̿ ̿).",
        400,
      );

    if (!mongoose.Types.ObjectId.isValid(accountID))
      throw new ReqError(
        "The given accountID is invalid! Check it and try again.",
        400,
      );

    const response = await AccountService.changeRole(accountID, role);

    res.locals["account"] = response;

    next();
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

module.exports = {
  handleCreateAccount,
  handleGetAccount,
  handleRoleChange,
  handleGetLiked,
  handleGetCreations,
};
