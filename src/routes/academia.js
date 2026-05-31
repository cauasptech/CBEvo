var express = require("express");
var router = express.Router();

var academiaController = require("../controllers/academiaController");

router.get("/listar", function (req, res) {
  academiaController.listar(req, res);
});

module.exports = router;