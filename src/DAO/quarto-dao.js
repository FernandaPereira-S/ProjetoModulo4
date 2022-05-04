class QuartoDao {
    constructor(bd) {
        this.bd = bd;
    }
    listarQuartos() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM QUARTOS`, (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
        });
    }
    listarQuartosId(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM QUARTOS WHERE ID = ${id}`, (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
        });
    }
    insereQuartos(NovoQuarto) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO QUARTOS (numero, andar, tipo_quarto, qtd_pessoas, qtd_camas, valor, status) VALUES (?, ?, ?, ?, ?, ?, ?)`, [NovoQuarto.numero, NovoQuarto.andar, NovoQuarto.tipo_quarto, NovoQuarto.qtd_pessoas, NovoQuarto.qtd_camas, NovoQuarto.valor, NovoQuarto.status], (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve("INSERIDO COM SUCESSO!")
                }
            });
        });
    }
    altereQuartos(Parametros) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE QUARTOS SET numero = ?, andar = ?, tipo_quarto = ?, qtd_pessoas = ?, qtd_camas = ?, valor = ?, status = ? WHERE ID = ?`, Parametros, (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve("ALTERADO COM SUCESSO")
                }
            });
        });
    }
    deleteQuartos(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM QUARTOS WHERE ID = ${id}`, (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve("DELETADO COM SUCESSO")
                }
            });
        });
    }
}

module.exports = QuartoDao;