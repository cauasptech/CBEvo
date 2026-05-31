var academiaModel = require("../models/academiaModel");

function listar(req, res) {
  academiaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  listar
};
