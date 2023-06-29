import express from 'express';
const router = express.Router();
import { getJokeController } from '../controllers/jokes';
import { auth } from '../middleware/auth';

router.get('/', auth, getJokeController);

export default router;