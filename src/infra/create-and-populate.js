const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const QUARTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "QUARTOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER(4),
    "andar" INTEGER(2),
    "tipo_quarto" VARCHAR(20),
    "qtd_pessoas" INTEGER(6),
    "qtd_camas" INTEGER(6),
    "valor" DECIMAL(4, 2),
    "status" VARCHAR(20)
  );`;

const ADD_QUARTOS_DATA = `
INSERT INTO QUARTOS (id, numero, andar, tipo_quarto, qtd_pessoas, qtd_camas, valor, status)
VALUES 
    (1, 1, 4, 'Premier', 6, 3, 600.00, 'Disponivel'),
    (2, 5, 10, 'Luxo', 8, 5, 2000.00, 'Disponivel'),
    (3, 7, 2, 'Standard', 3, 2, 400.00, 'Reservado')
`

function criaTabelaQuarto() {
    db.run(QUARTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de quartos");
    });
}


function populaTabelaQuarto() {
    db.run(ADD_QUARTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de quartos");
    });
}

db.serialize( ()=> {
    criaTabelaQuarto();
    populaTabelaQuarto();
});