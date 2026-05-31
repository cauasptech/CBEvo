var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT idacademia, nome, fk_CEP FROM academia`;
    return database.executar(instrucaoSql);
}

module.exports = { listar };