/*Execução única para criar e popular o banco*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');


const DIARIAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DIARIAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ENTRADA" varchar(64),
    "SAIDA" varchar(64),
    "CHECKIN" varchar(64),
    "CHECKOUT" varchar(64)
    "ADULTOS" varchar(64),
    "CRIANCAS"
  );`;

const ADD_DIARIAS_DATA = `
INSERT INTO DIARIAS (ID, ENTRADA, SAIDA, CHECKIN, CHECKOUT, ADULTOS, CRIANCAS)
VALUES 
    (1, '07/05/2022', '15/05/2022', '13:00', '12:59', '2', '0'),
    (2, '08/05/2022', '16/05/2022', '13:00', '12:59', '1', '0'),
    (3, '09/05/2022', '17/05/2022', '13:00', '12:59', '2', '1')
`

function criaTabelaDiarias() {
    db.run(DIARIAS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de diárias");
    });
}


function populaTabelaDiarias() {
    db.run(ADD_DIARIAS_DATA, (error)=> {
       if (error) console.log(error);
    });
}


db.serialize( ()=> {
    criaTabelaDiarias();
    populaTabelaDiarias();

});


function populaTabelaDiarias() {
    db.run(ADD_DIARIAS_DATA, (error)=> {
       if (error) console.log(error);
    });
}


db.serialize( ()=> {
    criaTabelaDiarias();
    populaTabelaDiarias();

});