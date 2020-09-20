var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send("Nothing To See Here (▀̿̿Ĺ̯̿▀̿ ̿)");
});

module.exports = router;
