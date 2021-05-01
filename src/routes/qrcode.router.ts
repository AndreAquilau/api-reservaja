import { Router } from 'express';
import QrCodeController from '@controllers/QrCodeController';

const router = Router();

router.get('/', QrCodeController.index);
router.post('/', QrCodeController.store);
router.get('/:id', QrCodeController.show);
router.delete('/:id', QrCodeController.delete);
router.put('/:id', QrCodeController.update);
router.put('/:id', QrCodeController.update);
export default router;
