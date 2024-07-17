import { Router } from 'express';
import ProdutoController from './Controllers/ProdutoController.js';

const router = Router();

router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.post('/produtos', ProdutoController.store);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.delete);

export default router
