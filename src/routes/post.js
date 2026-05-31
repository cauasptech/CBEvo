var express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    postController.publicar(req, res);
});

router.get("/qtd_esporte", function (req, res) {
    postController.contarPorEsporte(req, res);
});

router.get("/qtd_genero", function (req, res) {
    postController.contarPorGenero(req, res);
});

router.get("/qtd_post_atleta", function (req, res) {
    postController.contarPorPost_Atleta(req, res);
});

router.get("/qtd_atleta_academia", function (req, res) {
    postController.contarPorAtleta_Academia(req, res);
});

router.get("/qtd_academia", function (req, res) {
    postController.contarPorAcademia(req, res);
});

router.get("/qtd_post_academia", function (req, res) {
    postController.contarPorPost_Academia(req, res);
});

module.exports = router;