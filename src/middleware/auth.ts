import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES, STATUS } from '../constants';
import { verifyJWT } from '../utils/jwt';

interface AuthRequest extends Request {
  user: {
    id: number;
    email: string;
  };
}

export const auth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error(ERROR_MESSAGES.MISSING_AUTH_HEADER);
    const token = authHeader.split(' ')[1];
    if (!token) throw new Error(ERROR_MESSAGES.MISSING_TOKEN);
    const user = verifyJWT(token);
    req.user = user as { id: number; email: string };
    next();
  } catch (error) {
    res
      .status(STATUS.UNAUTHORIZED)
      .json({ error: ERROR_MESSAGES.UNAUTHORIZED });
  }
};
