import { Request, Response } from 'express';
import { STATUS } from '../constants';
import { login } from '../services/login';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const responseObject = await login(email, password);
    res.status(STATUS.OK).json(responseObject);
  } catch (error: any) {
    res.status(STATUS.BAD_REQUEST).json(error.message);
  }
};