import ProdutoRepositorie from "../App/Repositories/ProdutoRepositorie.js";

class ProdutoController {

    async getAllProdutos(req, res) {
        try {
            const produtos = await ProdutoRepositorie.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    async createProduto(req, res) {
        try {
            const produto = await ProdutoRepositorie.create(req.body);
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    async getProdutoById(req, res) {
        try {
            const produto = await ProdutoRepositorie.findById(req.params.id);
            if (!produto) {
                return res.status(404).json({ msg: 'Produto não encontrado' });
            }
            res.json(produto);
        } catch (error) {
            res.status(404).json({ msg: error.message });
        }
    }

    async updateProduto(req, res) {
        try {
            const updatedProduto = await ProdutoRepositorie.update(req.body, req.params.id);
            res.json(updatedProduto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProduto(req, res) {
        try {
            await ProdutoRepositorie.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new ProdutoController();
