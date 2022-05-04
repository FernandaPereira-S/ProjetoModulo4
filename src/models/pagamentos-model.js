class Pagamentos{
    constructor(PRECO, FORMA_DE_PAGAMENTO, PARCELAS){
        this.PRECO = PRECO;
        this.FORMA_DE_PAGAMENTO = FORMA_DE_PAGAMENTO;
        this.PARCELAS = this.verificarParcelas(PARCELAS);
    }
    verificarParcelas(PARCELAS){
        if(PARCELAS.length <= 6){
            return PARCELAS
        }else{
            throw new Error("O número máximo de parcelas é 6x")
        }
    }
}

module.exports = Pagamentos;