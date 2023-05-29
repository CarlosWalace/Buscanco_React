const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

db.serialize(() => {

  db.run('BEGIN TRANSACTION');
  db.run(`
    CREATE TABLE user (
        nome VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        senha VARCHAR(50) NOT NULL,
        endereco VARCHAR(50) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        local VARCHAR(50) NOT NULL
    )`
  );

  db.run(`
    CREATE TABLE onibus (
      numero VARCHAR(10) NOT NULL,
      nome VARCHAR(50) NOT NULL,
      qtd_passageiros INT NOT NULL,
      motorista VARCHAR(50) NOT NULL,
      proxima_parada VARCHAR(50) NOT NULL,
      ultima_parada VARCHAR(50) NOT NULL
    )`
  );

  db.run(`
    CREATE TABLE parada (
      endereco VARCHAR(50) NOT NULL,
      latitude DECIMAL(10, 8) NOT NULL,
      longitude DECIMAL(11, 8) NOT NULL,
      e_terminal BOOLEAN NOT NULL,
      horario_chegada_estimado TIME NOT NULL,
      horario_partida_estimado TIME NOT NULL
    )`
  );

  db.run(`
    INSERT INTO user (nome, email, senha, endereco, telefone, local)
    VALUES ('João', 'joao@gmail.com', 'senha123', 'Rua das Flores, 123', '11987654321', 'São Paulo'),
           ('Maria', 'maria@hotmail.com', '123456', 'Avenida Paulista, 456', '11976543210', 'São Paulo'),
           ('Pedro', 'pedro@yahoo.com', 'abc123', 'Rua Augusta, 789', '11999999999', 'São Paulo')`
  );

  db.run(`
    INSERT INTO onibus (numero, nome, qtd_passageiros, motorista, proxima_parada, ultima_parada)
    VALUES ('123', 'Circular', 30, 'José', 'Terminal Central', 'Praça da Sé'),
           ('456', 'Linha 1', 40, 'Lucas', 'Estação de Metrô', 'Shopping Center'),
           ('789', 'Linha 2', 35, 'Amanda', 'Aeroporto Internacional', 'Shopping Center')`
  );

  db.run(`
    INSERT INTO parada (endereco, latitude, longitude, e_terminal, horario_chegada_estimado, horario_partida_estimado)
    VALUES ('Terminal Central', -23.561402, -46.655692, true, '06:00:00', '22:00:00'),
          ('Praça da Sé', -23.550468, -46.633333, true, '06:10:00', '22:10:00'),
          ('Estação de Metrô', -23.544131, -46.636273, false, '06:20:00', '22:20:00'),
          ('Shopping Center', -23.543665, -46.634735, false, '06:30:00', '22:30:00'),
          ('Aeroporto Internacional', -23.435556, -46.473056, true, '07:00:00', '23:00:00')`
  );

  db.run('COMMIT', (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Transaction committed successfully');
    }
  });
});
db.close(); 