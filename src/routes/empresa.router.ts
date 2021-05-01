import { Router } from 'express';
import EmpresaController from '@controllers/EmpresaController';

const router = Router();

router.get('/', EmpresaController.index);
router.post('/', EmpresaController.store);
router.get('/:id', EmpresaController.show);
router.delete('/:id', EmpresaController.delete);
router.put('/:id', EmpresaController.update);
export default router;
