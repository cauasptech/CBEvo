var express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    postController.publicar(req, res);
});

router.get("/contar-esporte", function (req, res) {
    postController.contarPorEsporte(req, res);
});

module.exports = router;