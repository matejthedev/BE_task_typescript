import { Request, Response } from 'express';
import { ERROR_MESSAGES, STATUS } from '../constants';
import { createUser, getUsers } from '../services/users';

export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(STATUS.OK).json(users);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_GET_USERS });
  }
}

export const createUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(STATUS.CREATED).json(newUser);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_CREATE_USER });
  }
};