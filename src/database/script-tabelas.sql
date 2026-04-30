CREATE DATABASE CBacad;
USE CBacad;

CREATE TABLE academia (
idacademia INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
CEP CHAR(8),
bairro VARCHAR(45)
);

INSERT INTO academia (nome, CEP, bairro) VALUES
('Iron Fit', '12345123', 'Monte Alegre');

SELECT * FROM academia;

CREATE TABLE usuario (
idusuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL,
senha VARCHAR(100) NOT NULL,
genero CHAR(1),
CONSTRAINT chk_genero CHECK (genero IN ('M', 'F', 'O')),
fkAcademia INT,
CONSTRAINT fk_academia_const FOREIGN KEY (fkAcademia) REFERENCES academia(idacademia)
);

INSERT INTO usuario (nome, email, senha, genero, fkAcademia) VALUES
('Cauã', 'caua.martos@sptech.school', 'senha123', 'M', 1);

SELECT * FROM usuario;

CREATE TABLE post (
idpost INT PRIMARY KEY AUTO_INCREMENT,
esporte VARCHAR(10),
CONSTRAINT chk_esporte CHECK (esporte IN ('Muay Thai', 'Jiu-Jitsu', 'Misto')),
dtTreino DATETIME,
descricao VARCHAR(200),
fkUsuario INT,
CONSTRAINT fk_usuario_post FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario)
);

INSERT INTO post (esporte, dtTreino, descricao, fkUsuario) VALUES
('Misto', '2026-10-12', 'Lorem Ipslum', '1');

SELECT * FROM post;

CREATE TABLE curtida (
fkPost INT,
fkUsuario INT,
PRIMARY KEY (fkPost, fkUsuario), 
CONSTRAINT fk_post_curtida FOREIGN KEY (fkPost) REFERENCES post(idpost),
CONSTRAINT fk_usuario_curtida FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario)
);

INSERT INTO curtida (fkPost, fkUsuario) VALUES
(1, 1);

SELECT * FROM curtida;
