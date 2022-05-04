class PagamentosDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarPagamentos(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PAGAMENTOS`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
             })
        })
    }
    listarPagamentosID(ID_Pagamentos){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PAGAMENTOS WHERE ID_PAGAMENTOS = ${id}`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
             })
        })

    }
    inserirPagamentos(NovoPagamento){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO PAGAMENTOS (PRECO, FORMA_DE_PAGAMENTO, PARCELAS) VALUES(?,?,?)`,
            [NovoPagamento.PRECO, NovoPagamento.FORMA_DE_PAGAMENTO, NovoPagamento.PARCELAS],(err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve("DADOS INSERIDOS COM SUCESSO");
                }
            })
        })

    }
    alterePagamentos(Parametros){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE PAGAMENTOS SET PRECO = ?, FORMA_DE_PAGAMENTO = ?, PARCELAS = ? WHERE ID_PAGAMENTOS = ?`, Parametros, (err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve("ALTERADO COM SUCESSO!");
                }
            })
        })

    }
    deletePagamentos(ID_Pagamentos){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM PAGAMENTOS WHERE ID_PAGAMENTOS = ${id}`, (err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve("APAGADO COM SUCESSO!");
                }
    
            })
        })

    }
}

module.exports = PagamentosDAO;