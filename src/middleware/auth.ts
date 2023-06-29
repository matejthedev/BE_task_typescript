import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES, STATUS } from '../constants';
import { verifyJWT } from '../utils/jwt';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error(ERROR_MESSAGES.MISSING_AUTH_HEADER);
    const token = authHeader.split(' ')[1];
    if (!token) throw new Error(ERROR_MESSAGES.MISSING_TOKEN);
    verifyJWT(token);
    // req.user = user;
    next();
  } catch (error: any) {
    res.status(STATUS.UNAUTHORIZED).json({ error: ERROR_MESSAGES.UNAUTHORIZED });
  }
}