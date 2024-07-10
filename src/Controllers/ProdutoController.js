import ProdutoRepositorie from "../App/Repositories/ProdutoRepositorie.js"

class ProdutoController {

    async index(req, res) {
        try {
            const result = await ProdutoRepositorie.findAll()
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    async show(req, res) {

        try {
            const id = req.params.id
            const result = await ProdutoRepositorie.findById(id)
            res.json(result)

        } catch (error) {
            console.log(error)
        }
    }

    async store(req, res) {
        try {
            const produto = req.params.body
            const result = await ProdutoRepositorie.create(produto)
            res.json(result)
        } catch (error) {
            console.log(error)
        }

    }

    async update(req, res) {
        try {
            const id = req.id
            const produto = req.body
            const result = await ProdutoRepositorie.update([id, produto])
            res.json(result)
            
        } catch (error) {
            console.log(error)
        }

    }

    async delete(req, res) {
        try {
            const result = await ProdutoRepositorie.delete()
            res.json(result)
        } catch (error) {
            console.log(error)
        }

    }

}

export default new ProdutoController()