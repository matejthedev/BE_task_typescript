import express from 'express';
const router = express.Router();
import { createUserController, getUsersController } from '../controllers/users';

router.get('/', getUsersController);
router.post('/', createUserController);

export default router;