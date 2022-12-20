import { Router } from 'express';
import * as authController from '../controllers/authController.mjs';

const router = Router();

router.route('/login').post(authController.loginUser);

export default router;
