import express from 'express';
import { authController } from '../controllers/index.js';
import { protect } from '../middleware/index.js';
import { registerValidator, loginValidator, validate } from '../validators/index.js';

const router = express.Router();

router.post('/register', registerValidator, validate, authController.register);
router.post('/login', loginValidator, validate, authController.login);
router.get('/me', protect, authController.getMe);

export default router;
