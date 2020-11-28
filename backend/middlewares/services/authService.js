const { ReqError } = require("../../helpers/ReqError");
const ErrorHandler = require("../handlers/errorHandler");

const Account = require("../../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const authenticate = async (req, res, { email, password }) => {
  try {
    // Tries to get the account with the same entered email.
    const foundAccount = await Account.findOne({ email });
    if (!foundAccount)
      throw new ReqError("Incorrect email address and/or password.", 400);

    // Checks if the inserted password is the same as the one on the found account
    const validPassword = await bcrypt.compare(
      password,
      foundAccount.passwordHash
    );
    if (!validPassword)
      throw new ReqError("Incorrect email address and/or password.", 400);

    const { _id, username, role } = foundAccount;

    // Create and assign a token to the user
    const token = jwt.sign({ _id, role }, TOKEN_SECRET);

    const user = { _id, username, email, role };

    return { user, token };
  } catch (error) {
    ErrorHandler.handleError(req, res, error);
  }
};

module.exports = {
  authenticate,
};
