import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Fernando',
    database: 'BdProdutos'
})

conexao.connect();

export const consulta = (sql, values='', messageReject) => {

    return Promise((resolve, reject) =>{
        conexao.query(sql, values ,(error, result) => {
            if(error) return reject(messageReject)

            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao