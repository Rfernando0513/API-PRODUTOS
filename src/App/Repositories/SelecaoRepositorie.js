import conexao from '../Data/conexao.js'

class SelecaoRepositorie {

    create(produto) {
        const sql = 'INSERT INTO Produto SET ?;'
        return Promise((resolve, reject) =>{
            conexao.query(sql, produto ,(error, result) => {
                if(error) return reject('Falha ao Cadastrar Produto')

                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = 'SELECT * FROM Produto;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) return reject('Produtos não localizado')

                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id) 
    {
        const sql = 'SELECT * FROM Produto WHERE Id=?;'

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject('Produto Não Encontrado')

                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(id, produto) {
        const sql = 'UPDATE Produto SET ? WHERE Id=?;'

        return new Promise((resolve, reject) => {
            conexao.query(sql,[produto, id], (error, result) => {
                if(error) return reject('Falha ao atualizar o Produto')

                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
            })
        })
    }

    delete() {
        const id = req.params.id
        const sql = 'DELETE  FROM Produto WHERE Id=?;'

        conexao.query(sql, id, (error, result) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }
}

export default new SelecaoRepositorie()