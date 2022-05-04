class QuartoModel {
    constructor(numero, andar, tipo_quarto, qtd_pessoas, qtd_camas, valor, status) {
        this.numero = numero;
        this.andar = andar;
        this.tipo_quarto = tipo_quarto;
        this.qtd_pessoas = qtd_pessoas;
        this.qtd_camas = qtd_camas;
        this.valor = valor;
        this.status = status;
    }
}

module.exports = QuartoModel;