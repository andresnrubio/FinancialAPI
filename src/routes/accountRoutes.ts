import { Router } from 'express';
import * as accountController from '../controllers/accountController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.use(authenticateJWT);  // Todas las rutas de cuentas requieren autenticación

router.post('/', accountController.createAccount);
router.get('/', accountController.getUserAccounts);
router.get('/:accountId', accountController.getAccount);
router.put('/:accountId', accountController.updateAccount);
router.delete('/:accountId', accountController.deleteAccount);

export default router;