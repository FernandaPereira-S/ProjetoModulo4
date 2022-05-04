let id = 0;
class Funcionario{
    constructor(nome, cpf, cargo){
        this.id = id++;
        this.nome = nome;
        this.cpf = this.verificarCPF(cpf);
        this.cargo = cargo;
    }

    verificarCPF(cpf){
        if(cpf.length <= 14){
            return cpf
        }else{
            throw new Error("Colocar o CPF com seus pontos e traço")
        }
    
    }
}

module.exports = Funcionario;