//API
//Funcionarios
const express = require('express');
const app = express();

//importando banco
const bd = require ('./infra/sqlite-db');

//importando os controlers
const funcionarios = require('./controllers/funcionarios-controller')

app.use(express.json())

funcionarios(app,bd)

app.listen(3000, () =>{
    console.log("rodando servidor na porta 3000");
})