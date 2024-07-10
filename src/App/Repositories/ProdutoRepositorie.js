import { consulta } from '../Data/conexao.js'

class ProdutoRepositorie {

    create(produto) {
        const sql = 'INSERT INTO Produto SET ?;'
        return consulta(sql, produto, 'Não foi Cadastrar Produto');
    }

    findAll() {
        const sql = 'SELECT * FROM Produto;'
        return consulta(sql, 'Não foi Possivel Localizar Produtos');
    }

    findById(id) 
    {
        const sql = 'SELECT * FROM Produto WHERE Id=?;'
        return consulta(sql, id, `Não foi Cadastrar o Produto: ${id}`);
    }

    update(produto, id) {
        const sql = 'UPDATE Produto SET ? WHERE Id=?;'
        return consulta(sql, [produto, id], `Não foi Atualizar`);
    }

    delete(id) {
        const sql = 'DELETE  FROM Produto WHERE Id=?;'
        return consulta(sql, id, `Não foi Apagar`);
    }
}

export default new ProdutoRepositorie()