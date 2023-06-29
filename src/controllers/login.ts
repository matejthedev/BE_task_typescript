import { Request, Response } from 'express';
import { ERROR_MESSAGES, STATUS } from '../constants';
import { login } from '../services/login';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) res.status(STATUS.BAD_REQUEST).json(ERROR_MESSAGES.MISSING_CREDENTIALS);
    const responseObject = await login(email, password);
    res.status(STATUS.OK).json(responseObject);
  } catch (error: any) {
    res.status(STATUS.BAD_REQUEST).json(error.message);
  }
};