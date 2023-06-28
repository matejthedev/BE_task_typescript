import express from 'express';
const router = express.Router();
import { createUser, getUsers } from '../controllers/users';

router.get('/', getUsers);
router.post('/', createUser);

export default router;