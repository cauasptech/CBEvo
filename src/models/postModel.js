var database = require("../database/config");

function listar() {
  var instrucaoSql = `
        SELECT p.idpost, p.esporte, p.dtTreino, p.descricao, p.fkUsuario, u.nome
        FROM post p
        JOIN usuario u ON p.fkUsuario = u.idusuario
        ORDER BY p.dtTreino DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function publicar(esporte, descricao, fkUsuario) {
  var instrucaoSql = `
        INSERT INTO post (esporte, dtTreino, descricao, fkUsuario) VALUES 
        ('${esporte}', NOW(), '${descricao}', '${fkUsuario}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPorEsporte() {
  var instrucaoSql = `
        SELECT esporte, COUNT(*) AS total 
        FROM post 
        GROUP BY esporte;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPorGenero() {
  var instrucaoSql = `
        SELECT genero, COUNT(*) AS total FROM usuario GROUP BY genero;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPorPost_Atleta() {
  var instrucaoSql = `
        SELECT u.nome, COUNT(*) AS total 
        FROM post p 
        JOIN usuario u ON p.fkUsuario = u.idusuario 
        GROUP BY p.fkUsuario 
        HAVING COUNT(*) = (
        SELECT MAX(total) FROM (
            SELECT COUNT(*) AS total 
            FROM post 
            GROUP BY fkUsuario) AS resultado);
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPorAtleta_Academia() {
  var instrucaoSql = `
        SELECT IFNULL(a.nome, 'Treino em Casa') AS academia, COUNT(*) AS total 
        FROM usuario u 
        LEFT JOIN academia a ON u.fkAcademia = a.idacademia
        GROUP BY u.fkAcademia 
        HAVING COUNT(*) = (
          SELECT MAX(total) FROM (
            SELECT COUNT(*) AS total FROM usuario GROUP BY fkAcademia
            ) AS sub);
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPorAcademia() {
  var instrucaoSql = `
        SELECT COUNT(*) AS total FROM academia;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPorPost_Academia() {
  var instrucaoSql = `
        SELECT 
        IFNULL(a.nome, 'Treinam em Casa') AS academia, 
        COUNT(p.idpost) AS total
        FROM usuario u
        LEFT JOIN academia a ON u.fkAcademia = a.idacademia
        LEFT JOIN post p ON p.fkUsuario = u.idusuario
        GROUP BY u.fkAcademia;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarTodos(idUsuario) {
  var instrucaoSql = `
        SELECT p.fkUsuario, u.nome, p.dtTreino, p.esporte, p.descricao
        FROM post p
        JOIN usuario u ON p.fkUsuario = u.idusuario
        WHERE p.fkUsuario != ${idUsuario}
        ORDER BY p.fkUsuario, p.dtTreino DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  publicar,
  contarPorEsporte,
  contarPorGenero,
  contarPorPost_Atleta,
  contarPorAtleta_Academia,
  contarPorAcademia,
  contarPorPost_Academia,
  listarTodos
};
