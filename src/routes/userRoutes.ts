import { Router } from 'express';
import * as userController from '../controllers/userController';
import * as authController from '../controllers/authController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/register', userController.register);
router.post('/login', authController.login);
router.get('/profile', authenticateJWT, userController.getProfile);

export default router;