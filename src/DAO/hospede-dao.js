class HospedeDAO{

    constructor(bd){
        this.bd = bd;

    }
    //cria
    cHospede(NovoHospede){
    
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO HOSPEDE (NOME , EMAIL, TELEFONE , CPF , DATA ) VALUES (?,?,?,?,?)`,
            [NovoHospede.nome, NovoHospede.email, NovoHospede.telefone, NovoHospede.cpf, NovoHospede.data]
            , (error)=>{
                if(error){  
                    reject(error);
                }else{
                    resolve("hospede cadastrado")
                }
            })
        })

    }

    //lista
    rHospede(){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM HOSPEDE`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })

    }

    //atualiza
    uHospede(Parametros){
        return new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE HOSPEDE SET NOME = ?, EMAIL = ?, TELEFONE = ? , CPF = ?, DATA = ? WHERE id = ?`, Parametros ,(err) => {
                if(err){
                    reject(err)
                }else{
                    resolve('ALTERADO COM SUCESSO')
                }
            })
        })

    }

    //deleta
    dHospede(id){

        return new Promise((resolve, reject)=>{
            this.bd.run(`DELETE FROM HOSPEDE WHERE ID = ${id}`,(error)=>{
                if (error){
                   reject(error)
                }else{
                resolve('deletado com sucesso')
            }
        })
    })

}
}


module.exports = HospedeDAO;