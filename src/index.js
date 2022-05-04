const express = require('express')
const app = express();
//importando o controller
const pagamentos = require('./controllers/pagamentos-controller');
//importando o banco
const bd = require('./infra/sqlite-db')

// body-parser
app.use(express.json())

//chamando o controller e passando o express
pagamentos(app, bd)


app.listen(3000, ()=>{
    console.log("API rodando na porta 3000")
});