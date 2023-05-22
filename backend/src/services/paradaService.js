const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../../database.db");

function getParada() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM parada", (err, rows) => {
      if (err) {
        console.error(err.message);
        reject("Internal Server Error");
      } else {
        resolve(rows);
      }
    });
  });
}

function getParadaByName(name) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM parada WHERE nome LIKE '%${name}%'`, (err, rows) => {
      if (err) {
        console.error(err.message);
        reject("Internal Server Error");
      } else {
        resolve(rows);
      }
    });
  });
}

function adicionarParada(parada) {
    return new Promise((resolve, reject) => {
        db.all(
          `INSERT INTO parada (endereco, latitude, longitude, e_terminal, horario_chegada_estimado, horario_partida_estimado) 
            VALUES ('${parada.endereco}', '${parada.latitude}', '${parada.longitude}', '${parada.e_terminal}', '${parada.horario_chegada_estimado}', '${parada.horario_partida_estimado}')`,
          (err, rows) => {
            if (err) {
              console.error(err.message);
              reject("Internal Server Error");
            } else {
              resolve(`insert successfully into parada`);
            }
          }
        );
    });
}

async function atualizarParada(endereco, parada) {
     return new Promise((resolve, reject) => {
        db.all(
            `UPDATE parada SET
                    ${parada.endereco ? ` endereco = '${parada.endereco}'` : ``}
                    ${parada.latitude ? ` ,latitude = '${parada.latitude}'` : ``}
                    ${parada.longitude ? ` ,longitude = '${parada.longitude}'` : ``}
                    ${parada.e_terminal ? ` ,e_terminal = '${parada.e_terminal}'` : ``}
                    ${parada.horario_chegada_estimado ? ` ,horario_chegada_estimado = '${parada.horario_chegada_estimado}'` : ``}
                    ${parada.horario_partida_estimado ? ` ,horario_partida_estimado = '${parada.horario_partida_estimado}'` : ``}
            WHERE endereco = '${endereco}'`,
          (err, rows) => {
            if (err) {
              console.error(err.message);
              reject("Internal Server Error");
            } else {
              resolve(`update successfully from parada`);
            }
          }
        );
    });
}

async function removerParada(endereco) {
  return new Promise((resolve, reject) => {
    db.all(`DELETE FROM parada WHERE endereco = '${endereco}'`, (err, rows) => {
      if (err) {
        console.error(err.message);
        reject("Internal Server Error");
      } else {
        resolve(`delete successfully from parada`);
      }
    });
  });
}

module.exports = {
  getParada,
  getParadaByName,
  adicionarParada,
  atualizarParada,
  removerParada,
};
