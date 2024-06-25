import express, { json } from 'express';

const app = express();

app.use(express.json())

//mock
const produtos = [
    { id: 1, nome: 'Calça', preco: "15,66",  tamanho: '42'},
    { id: 2, nome: 'Camiseta', preco: "10,90",tamanho: 'GG' },
    { id: 3, nome: 'tenis', preco: "29,90", tamanho: '41' },
    { id: 4, nome: 'bermuda', preco: "34,55", tamanho: '38' },
]

function buscarProdutoPorId(id) {
    return produtos.filter(produtos => produtos.id == id)
}

function buscarIndexProduto(id){
    return produtos.findIndex(produtos => produtos.id == id)
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/produtos', (req, res) => {
    res.status(200).send(produtos)
})

app.get('/produtos/:id', (req, res ) => {
    res.json(buscarProdutosPorId(req.params.id))   
})

app.post('/produtos', (req, res) => {
    produtos.push(req.body)
    res.status(201).send('produto cadastrado com sucesso')
})

app.put('/produtos/:id', (req, res) =>{
    let index = buscarIndexProduto(req.params.id)

    produtos[index].nome = req.body.nome
    produtos[index].preco = req.body.preco
    produtos[index].tamanho = req.body.tamanho


    res.json(produtos)
})


app.delete('/produtos/:id', (req, res) =>{
    let index = buscarIndexProduto(req.params.id)
    produtos.splice(index, 1)
    res.send(`produtos excluida com id: ${req.params.id} sucesso`)
})  


export default app;
