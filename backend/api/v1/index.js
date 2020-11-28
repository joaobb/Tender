var express = require("express");
var router = express.Router();

const Controller = require("../../controllers/swipeController");
const Handler = require("../../middlewares/handlers/swipeHandler");
const AuthHandler = require("../../middlewares/handlers/authHandler");

router.get("/", function (req, res, next) {
  res.send("Nothing To See Here (▀̿̿Ĺ̯̿▀̿ ̿)");
});

router.post(
  "/like/:recipeID?",
  AuthHandler.handleAuthorization(),
  Handler.handleLike,
  Controller.like,
);
router.post(
  "/pass/:recipeID?",
  AuthHandler.handleAuthorization(),
  Handler.handlePass,
  Controller.pass,
);

module.exports = router;
