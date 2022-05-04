const express = require('express');
const app = express();

const quarto = require('./controllers/quarto-controller');
const bd = require('./infra/sqlite-db');

app.use(express.json());
quarto(app, bd);

app.listen(3000, () => {
    console.log("rodando na porta 3000")
});