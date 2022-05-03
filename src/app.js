const express = require('express')
const app = express();

const hospede = require ('./controllers/hospede-controller.js')

const bodyParser = require('body-parser')

const bd = require('./infra/configDb.js');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

hospede(app, bd);

// app.use(express.json())





app.listen(8000, ()=>{
    console.log("rodando na porta 8000")
});
