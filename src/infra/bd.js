const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');


const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CPF" varchar(64),
    "CARGO" varchar(64)
  );`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (ID, NOME, CPF, CARGO)
VALUES 
    (1, 'Eugênio Oliveira', '369.518.218-06', 'Gerente'),
    (2, 'Olívia Ribeiro', '088.654.987-01', 'Faxineira'),
    (3, 'Mirtes Faria Lima', '518.088.542-04', 'Recepcionista')
`

function criaTabelaUsr() {
    db.run(FUNCIONARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionários");
    });
}


function populaTabelaUsr() {
    db.run(ADD_FUNCIONARIOS_DATA, (error)=> {
       if (error) console.log(error);
    });
}


db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
});


// const bd = {
//     "funcionarios": []
// }

// module.exports = bd