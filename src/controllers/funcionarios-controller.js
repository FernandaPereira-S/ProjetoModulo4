const Funcionario = require('../models/funcionarios-model')
const FuncionarioDAO = require('../DAO/funcionarios-dao')
const res = require('express/lib/response')

// exportando o app 
const funcionario = (app,bd) => {
    const DAOFuncionario = new FuncionarioDAO(bd)
    //CREATE DO CRUD - INSERE REGISTROS
    app.post('/funcionarios', (req, res) => {
        //pegar informações e armazenar em algum lugar
        const body = req.body
        const NovoFuncionario = new Funcionario(body.nome, body.cpf, body.cargo)
        const data = async() => {
            try{
                const funcionarios = await DAOFuncionario.inserirFuncionarios(NovoFuncionario)
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
        }
        data()
    })

    //READ DO CRUD - EXIBE REGISTROS
    app.get('/funcionarios', (req, res) => {
        const data = async() => {
            try{
                const funcionarios = await DAOFuncionario.listarFuncionarios()
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
        }
        data()
    })    

    //READ DO CRUD E EXIBI REGISTROS
    app.get('/funcionarios/:id', (req, res) => {
        const data = async() => {
            try{
                const funcionarios = await DAOFuncionario.listarFuncionariosID(req.params.id)
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
        }
        data()
    })

    //UPDDATE DO CRUD - ALTERA OS REGISTROS
    app.put('/funcionarios/:cpf', (req, res) => {
        const body = req.body
        const cpf = req.params.cpf;
        const parametros = [body.nome, body.cargo, body.id, cpf]
        const data = async() => {
            try{
                const funcionarios = await DAOFuncionario.alterarFuncionarios(parametros)
                res.send(funcionarios)
            }catch(err){
                res.send(err)
            }
        }
        data()
    })

    //DELETE DO CRUD - DELETAR REGISTROS
    app.delete('/funcionarios/:id', (req, res) => {
        //parametro para buscar o dado que a gente quer deletar
        //pegar o paramentro, buscar, alterar/deletar
        const id = req.params.id;
        const data = async() => {
            try{
                const funcionarios = await DAOFuncionario.deletarFuncionarios(id)
                res.send(funcionarios)
                console.log(funcionarios)
            }catch(err){
                res.send(err)
            }
        }
        data()
        
    })

}

module.exports = funcionario;