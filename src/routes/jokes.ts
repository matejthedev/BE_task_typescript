import express from 'express';
const router = express.Router();
import { getJoke } from '../controllers/jokes';

router.get('/', getJoke);

export default router;