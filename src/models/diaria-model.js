class Diaria{
    constructor( entrada , saida , checkin , checkout , adultos , criancas ){
        this.entrada = this.verificarEntrada(entrada);
        this.saida = saida;
        this.checkin = checkin;
        this.checkout = checkout;
        this.adultos = adultos;
        this.criancas = criancas;
    }
    verificarEntrada(entrada){ 
        if(entrada.length <= 10){
            return entrada
        }else{
            throw new Error("Use o formato 00/00/0000")
        }
    }
}
module.exports = Diaria;