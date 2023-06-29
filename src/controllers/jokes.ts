import { Request, Response } from 'express';
import { STATUS } from '../constants';
import { getJoke } from '../services/jokes';
import { sendEmail } from '../services/email';
interface AuthRequest extends Request {
  user: {
    id: number;
    email: string;
  };
}

export const getJokeController = async (req: AuthRequest, res: Response) => {
  try {
    const joke = await getJoke();
    sendEmail(req.user.email, joke.value);
    res.status(STATUS.OK).json(joke.value);
  } catch (error) {
    const caughtError = error as Error;
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: caughtError.message });
  }
};
