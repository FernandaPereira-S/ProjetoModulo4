//PAGAMENTOS - CRUD
const Pagamentos  = require('../models/pagamentos-model')
const PagamentosDAO = require('../DAO/pagamentos-dao')

const pagamentos = (app, bd)=>{
    const DAOPagamentos = new PagamentosDAO(bd)
    //CREATE DO CRUD - INSERE REGISTROS
    app.post('/pagamentos', (req, res) => {
        //pegar dados e armazena-los no banco
        const body = req.body
        const PagamentosDado = new Pagamentos(body.PRECO, body.FORMA_DE_PAGAMENTO, body.PARCELAS)
        const data = async() => {
            try {
                const pagamentos = await DAOPagamentos.inserirPagamentos(PagamentosDAO)
                res.send(pagamentos)
            }catch(err) {
                res.send(err)
            }
            
        }
        data()
          
    })
    //READ DO CRUD - EXIBE REGISTROS
    app.get('/pagamentos', (req, res) => {
        const data = async() => {
            try {
                const pagamentos = await DAOPagamentos.inserirPagamentos(PagamentosDAO)
                res.send(pagamentos)
            }catch (err) {
                res.send(err)
            }
        
    }
    data()

    });
    
    
        //READ DO CRUD - EXIBE REGISTROS
    app.get('/pagamentos/:id', (req, res) => {
        const data = async() => {
            try {
                const pagamentos = await DAOPagamentos.listarPagamentosID(req.params.id);
                res.send(pagamentos)
            }catch (err) {
                res.send(err)
            }
            
        }
        data()
            
            });
    //UPDATE DO CRUD - ATUALIZA REGISTROS
    app.put('/pagamentos/:id', (req, res) => {
        const body = req.body;
        const id_pagamentos = req.params.id        
        const parametros = [body.preco, body.forma_de_pagamento, body.parcelas, id_pagamentos]
        const data = async() => {
            try {
                const pagamentos = await DAOPagamentos.alterePagamentos(Parametros)
                res.send(pagamentos)
            }catch (err) {
                res.send(err)
            }
            
        }
        data()
        
    });

    //DELETE DO CRUD - APAGA REGISTROS
    app.delete('/pagamentos/:id', (req, res) => {
        const data = async() => {
            try {
                const pagamentos = await DAOPagamentos.deletePagamentos(req.params.id)
                res.send(pagamentos)
            }catch (err) {
                res.send(err)
            }
            
        }
        data()
    })
}

module.exports = pagamentos;