import express from 'express';
const router = express.Router();
import { getJokeController } from '../controllers/jokes';

router.get('/', getJokeController);

export default router;