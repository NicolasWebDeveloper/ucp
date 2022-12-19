import { Router } from 'express';
import * as viewController from '../controllers/viewController.mjs';

// import con from '../utils/database.mjs';

const router = Router();

router.get('/', viewController.renderLogin);

export default router;
