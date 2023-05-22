const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../../database.db");

function getOnibus() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM onibus", (err, rows) => {
            if (err) {
                console.error(err.message);
                reject("Internal Server Error");
            } else {
                resolve(rows);
            }
        });
    });
}

function getOnibusByName(name) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM onibus WHERE nome LIKE '%${name}%'`, (err, rows) => {
            if (err) {
                console.error(err.message);
                reject("Internal Server Error");
            } else {
                resolve(rows);
            }
        });
    });
}

function adicionarOnibus(onibus) {
    return new Promise((resolve, reject) => {
        db.all(
            `INSERT INTO onibus (numero, nome, qtd_passageiros, motorista, proxima_parada, ultima_parada) 
             VALUES ('${onibus.numero}', '${onibus.nome}', '${onibus.qtd_passageiros}', '${onibus.motorista}', 
             '${onibus.proxima_parada}', '${onibus.ultima_parada}')`,
            (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject("Internal Server Error");
                } else {
                    resolve(`insert successfully into onibus`);
                }
            }
        );
    });
}

async function atualizarOnibus(numero, onibus) {
     return new Promise((resolve, reject) => {
        db.all(
            `UPDATE onibus SET
                    ${onibus.nome ? ` nome = '${onibus.nome}'` : ``}
                    ${onibus.numero ? ` ,numero = '${onibus.numero}'` : ``}
                    ${onibus.qtd_passageiros ? ` ,qtd_passageiros = '${onibus.qtd_passageiros}'` : ``}
                    ${onibus.motorista ? ` ,motorista = '${onibus.motorista}'` : ``}
                    ${onibus.proxima_parada ? ` ,proxima_parada = '${onibus.proxima_parada}'` : ``}
                    ${onibus.ultima_parada ? ` ,ultima_parada = '${onibus.ultima_parada}'` : ``}
            WHERE numero = '${numero}'`,
          (err, rows) => {
            if (err) {
              console.error(err.message);
              reject("Internal Server Error");
            } else {
              resolve(`update successfully from onibus`);
            }
          }
        );
    });
}

async function removerOnibus(numero) {
    return new Promise((resolve, reject) => {
        db.all(`DELETE FROM onibus WHERE numero = '${numero}'`, (err, rows) => {
            if (err) {
                console.error(err.message);
                reject("Internal Server Error");
            } else {
                resolve(`delete successfully from onibus`);
            }
        });
    });
}

module.exports = {
  getOnibus,
  getOnibusByName,
  adicionarOnibus,
  atualizarOnibus,
  removerOnibus,
};
