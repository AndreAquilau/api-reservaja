import { Router } from 'express';
import VagaController from '@controllers/VagaController';

const router = Router();

router.get('/', VagaController.verificar);

export default router;
