import express from 'express';
import ProdutoController from './Controllers/ProdutoController.js';

const app = express();
app.use(express.json())

app.get('/produtos', ProdutoController.index)
app.get('/produtos/:id', ProdutoController.show)
app.post('/produtos', ProdutoController.store)
app.put('/produtos/:id', ProdutoController.update)
app.delete('/produtos/:id', ProdutoController.delete)

export default app;
