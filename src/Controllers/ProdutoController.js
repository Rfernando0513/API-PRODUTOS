import SelecaoRepositorie from "../App/Repositories/SelecaoRepositorie.js"

class SelecaoController {

    async index(req, res) {
        try {
            const result = await SelecaoRepositorie.findAll()
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    async show(req, res) {

        try {
            const id = req.params.id
            const result = await SelecaoRepositorie.findById(id)
            res.json(result)

        } catch (error) {
            console.log(error)
        }
    }

    async store(req, res) {
        try {
            const produto = req.params.body
            const result = await SelecaoRepositorie.create(produto)
            res.json(result)
        } catch (error) {
            console.log(error)
        }

    }

    async update(req, res) {
        try {
            const id = req.id
            const produto = req.body
            const result = await SelecaoRepositorie.update([id, produto])
            res.json(result)
            
        } catch (error) {
            console.log(error)
        }

    }

    async delete(req, res) {
        try {
            const result = await SelecaoRepositorie.delete()
            res.json(result)
        } catch (error) {
            console.log(error)
        }

    }

}

export default new SelecaoController()