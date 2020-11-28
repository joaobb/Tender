const express = require("express");

const Controller = require("../../controllers/accountController");
const Handler = require("../../middlewares/handlers/accountHandler");
const AuthHandler = require("../../middlewares/handlers/authHandler");

const roles = require("../../utils/enums/role.enum");

const router = express.Router();

router.get(
  "/",
  AuthHandler.handleAuthorization(),
  Handler.handleGetAccount,
  Controller.getAccount,
);

router.get(
  "/cookbook",
  AuthHandler.handleAuthorization(),
  Handler.handleGetLiked,
  Controller.getLikedRecipes,
);

router.post("/", Handler.handleCreateAccount, Controller.createAccount);

router.post(
  "/role",
  AuthHandler.handleAuthorization(roles.ROOT),
  Handler.handleRoleChange,
  Controller.roleChange,
);

module.exports = router;
