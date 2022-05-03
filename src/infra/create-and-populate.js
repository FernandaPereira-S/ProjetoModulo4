const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const HOSPEDE_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "HOSPEDE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(64),
    "CPF" varchar(64),
    "DATA" varchar(64)
  ); `;

  const ADICIONAR_HOSPEDES = `
    INSERT INTO HOSPEDE (ID, NOME, EMAIL, TELEFONE, CPF, DATA)
  VALUES 
      (1, 'Helena', 'helena@gmail.com', '12345678901', '09876543212', '09/06/1999'),
      (2, 'carla rocha', 'carla@gmail.com', '12345678902', '09876543210', '14/08/1978'),
      (3, 'maria vitoria', 'mariav@hotmail.com', '12345678903', '09876543211', '17/06/1998');`


function populaTabelaHospede() {
    db.run(ADICIONAR_HOSPEDES, (error)=> {
       if (error) console.log("Erro ao popular tabela de hospedes");
    })
    };


function criaTabelaHospede() {
    db.run(HOSPEDE_SCHEMA, (error)=> {
       if (error) console.log(error); 
    }) 
    };


db.serialize( ()=> {
    criaTabelaHospede();
    populaTabelaHospede();
});