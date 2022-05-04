const Hospede = require('../models/hospede-model.js')
const HospedeDAO = require ('../DAO/hospede-dao.js')

const hospede = (app, bd)=>{
    const DAOHospede= new HospedeDAO(bd)

    //cria
    app.post('/hospede',(req, res) => {
        const body = req.body
        const HospedeDado = new Hospede(body.NOME, body.EMAIL, body.TELEFONE, body.CPF, body.DATA)
        const espera = async() => {
            try{
                const hospede = await DAOHospede.cHospede(HospedeDado)
                res.send(hospede)
            }catch(err){
                res.send(err)
            }
        }
        espera()
    })  

    //pega
    app.get('/hospede', (req, res) => {
        const espera = async() => {
            try{
                const hospede = await DAOHospede.rHospede(req.params.id)
                res.send(hospede)
            }catch(err){
                res.send(err)
            }

        }
        espera()
    })

    app.get('/hospede/:id', (req, res) => {
        const espera = async() => {
            try{
                const hospede = await DAOHospede.rHospedeId(req.params.id)
                res.send(hospede)
            }catch(err){
                res.send(err)
            }

        }
        espera()
    })

    //atualiza
    app.put('/hospede/:id',(req, res) =>{
     const body = req.body
     const id = req.params.id
     const parametros = [body.NOME, body.EMAIL, body.TELEFONE, body.CPF, body.DATA, id]
     const espera = async() => {
        try{
            const hospede = await DAOHospede.uHospede(parametros)
            res.send(hospede)
        }catch(err){
            res.send(err)
        }
        }
        espera()    
    })

    //deleta
    app.delete('/hospede/:id',(req, res) =>{
        const id = req.params.id
        const espera = async() => {
            try{
                const hospede = await DAOHospede.dHospede(req.params.id)
                res.send(hospede)
            }catch(err){
                res.send(err)
            }
        
        }
        espera()
    })
}


module.exports = hospede;