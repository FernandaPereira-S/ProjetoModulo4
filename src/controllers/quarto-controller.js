const QuartoModel = require('../models/quarto-models');
const QuartoDao = require('../DAO/quarto-dao');

const quarto = (app, bd) => {
    const DaoQuarto = new QuartoDao(bd);
    app.post('/quarto', (req, res) => {
        const body = req.body;
        const QuartoDado = new QuartoModel(body.numero, body.andar, body.tipo_quarto, body.qtd_pessoas, body.qtd_camas, body.valor, body.status);
        const data = async() => {
            try {
                const quartos = await DaoQuarto.insereQuartos(QuartoDado);
                res.send(quartos);
            } catch(err) {
                res.send(err);
            }        
        }
        data()
    });
    app.get('/quarto', (req, res) => {
        const data = async() => {
            try {
                const quartos = await DaoQuarto.listarQuartos();
                res.send(quartos);
            } catch(err) {
                res.send(err);
            }        
        }
        data()
    })
    app.get('/quarto/:id', (req, res) => {
        const data = async() => {
            try {
                const quartos = await DaoQuarto.listarQuartosId(req.params.id);
                res.send(quartos);
            } catch(err) {
                res.send(err);
            }        
        }
        data()
    })
    app.put('/quarto/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const parametros = [body.numero, body.andar, body.tipo_quarto, body.qtd_pessoas, body.qtd_camas, body.valor, body.status, id];
        const data = async() => {
            try {
                const quartos = await DaoQuarto.altereQuartos(parametros);
                res.send(quartos);
            } catch(err) {
                res.send(err);
            }        
        }
        data()
    })
    app.delete('/quarto/:id', (req, res) => {
        const data = async() => {
            try {
                const quartos = await DaoQuarto.deleteQuartos(req.params.id);
                res.send(quartos);
            } catch(err) {
                res.send(err);
            }
        }
        data()
    })
}

module.exports = quarto;