import { Router } from 'express';
import routerEmpresa from '@routes/empresa.router';
import routerMesa from '@routes/mesa.router';
import routerQrCode from '@routes/qrcode.router';
import routerUser from '@routes/user.router';
import routerVaga from '@routes/vaga.router';
import routerVerificar from '@routes/verificar.router';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'API Online',
    baseUrl: `${process.env.BASE_URL}:${process.env.PORT}`,
  });
});

router.use('/empresas', routerEmpresa);
router.use('/mesas', routerMesa);
router.use('/qrcodes', routerQrCode);
router.use('/users', routerUser);
router.use('/vagas', routerVaga);
router.use('/verificar', routerVerificar);

export default router;
