import { Request, Response } from 'express';
import { STATUS } from '../constants';
import { createUser, getUsers } from '../services/users';

export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(STATUS.OK).json(users);
  } catch (error) {
    const caughtError = error as Error;
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: caughtError.message });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(STATUS.CREATED).json(newUser);
  } catch (error) {
    const caughtError = error as Error;
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: caughtError.message });
  }
};
