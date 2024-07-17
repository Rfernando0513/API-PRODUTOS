import { consulta } from '../Data/conexao.js'
import Produto from '../../Models/ProdutoModel.js'

class ProdutoRepositorie {

    create(produtoData) {
        const produto = new Produto(produtoData)
        if(!produto.isValid()){
            throw new Error('Produto Invalido')
        }

        const sql = 'INSERT INTO Produto SET ?;'
        return consulta(sql, produto, 'Não foi possivel cadastrar o produto')

    }

    findAll() {
        const sql = 'SELECT * FROM Produto;'
        return consulta(sql, 'Não foi Possivel Localizar Produtos');
    }

    findById(id) {
        const sql = 'SELECT * FROM Produto WHERE Id=?;'
        return consulta(sql, id, `Não foi Cadastrar o produto: ${id}`);
    }

    update(produtoData, id) {
        const produto = new Produto(produtoData);
        if(!produto.isValid()){
            throw new Error('Produto inválido');
        }
        const sql = 'UPDATE Produto SET ? WHERE Id=?;'
        return consulta(sql, [produto, id], `Não foi Atualizar o produto`);
    }

    delete(id) {
        const sql = 'DELETE  FROM Produto WHERE Id=?;'
        return consulta(sql, id, `Não foi possivel apagar o produto`);
    }
}

export default new ProdutoRepositorie()