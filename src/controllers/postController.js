var postModel = require("../models/postModel");

function listar(req, res) {
    postModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao listar posts! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function publicar(req, res) {
    var esporte = req.body.esporteServer;
    var descricao = req.body.descricaoServer;
    var fkUsuario = req.params.idUsuario;

    if (esporte == undefined) {
        res.status(400).send("Esporte está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Descrição está undefined!");
    } else {
        postModel.publicar(esporte, descricao, fkUsuario).then(function (resultado) {
            res.status(201).json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao publicar post! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function contarPorEsporte(req, res) {
    postModel.contarPorEsporte().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao contar posts! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    publicar,
    contarPorEsporte
};