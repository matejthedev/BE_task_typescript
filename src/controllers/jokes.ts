import { Request, Response } from 'express';
import { STATUS } from '../constants';
import { getJoke } from '../services/jokes';

export const getJokeController = async (_req: Request, res: Response) => {
  try {
    const joke = await getJoke();
    res.status(STATUS.OK).json(joke.value);
  } catch (error) {
    const caughtError = error as Error;
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: caughtError.message });
  }
};
