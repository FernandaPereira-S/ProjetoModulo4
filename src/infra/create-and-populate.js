/*
Esse arquivo deve ser executado apenas uma vez para que o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');


const PAGAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PAGAMENTOS" (
    "ID_PAGAMENTOS" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PRECO" INTEGER,
    "FORMA_DE_PAGAMENTO" varchar(64),
    "PARCELAS" INTEGER
);`;

const ADD_PAGAMENTOS_DATA = `
INSERT INTO PAGAMENTOS (ID_PAGAMENTOS, PRECO, FORMA_DE_PAGAMENTO, PARCELAS)
VALUES 
       (1, 'R$200', 'DEBITO', '1x'),
       (2, 'R$400', 'CREDITO', '2x'),
       (3, 'R$300', 'PIX', '1x')
`

function criaTabelaUsr() {
    db.run(PAGAMENTOS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de pagamentos");
    });
}


function populaTabelaUsr() {
    db.run(ADD_PAGAMENTOS_DATA, (error)=> {
        if (error) console.log("Erro ao popular tabela de pagamentos");
    });
}


db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
});