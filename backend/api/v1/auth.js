const express = require("express");
const router = express.Router();

const Handler = require("../../middlewares/handlers/authHandler");
const Controller = require("../../controllers/loginController");

// Account login.
router.post("/", Handler.handleLogin, Controller.login);

module.exports = router;
