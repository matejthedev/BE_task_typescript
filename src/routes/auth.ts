import express from 'express';
const router = express.Router();
import { createUser, getUsers } from '../controllers/user';

router.get('/users', getUsers);
router.post('/users', createUser);

export default router;