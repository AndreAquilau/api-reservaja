import { Router } from 'express';
import MesaController from '@controllers/MesaController';

const router = Router();

router.get('/', MesaController.index);
router.post('/', MesaController.store);
router.get('/:id', MesaController.show);
router.delete('/:id', MesaController.delete);
router.put('/:id', MesaController.update);
router.put('/:id', MesaController.update);
export default router;
