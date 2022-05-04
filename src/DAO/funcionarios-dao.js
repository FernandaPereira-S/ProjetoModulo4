class FuncionarioDAO{
    constructor(bd){
        this.bd = bd;
    }

    listarFuncionarios(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM FUNCIONARIOS`, (err, results)=> {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }

    listarFuncionariosID(id){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM FUNCIONARIOS WHERE ID=${id}`, (err, results)=> {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }

    inserirFuncionarios(NovoFuncionario){
        return new Promise((resolve, reject) =>{
            this.bd.run('INSERT INTO FUNCIONARIOS (NOME, CPF, CARGO) VALUES (?, ?, ?)',
            [NovoFuncionario.nome, NovoFuncionario.cpf, NovoFuncionario.cargo],(error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve("INSERIDO COM SUCESSO!")
                }
            })
        })
    }

    alterarFuncionarios(parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(` UPDATE FUNCIONARIOS SET NOME = ?, CARGO = ?, ID = ? WHERE CPF = ?`, parametros ,(error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve("ALTERADO COM SUCESSO!")
                }
            })
        })
    }

    deletarFuncionarios(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM FUNCIONARIOS WHERE ID = ${id}`,(error)=>{
                if(error){
                    reject(error)
                    console.log(error)
                }else{
                    resolve("DELETADO COM SUCESSO!")
                }
            })
        })
    }
}

module.exports = FuncionarioDAO