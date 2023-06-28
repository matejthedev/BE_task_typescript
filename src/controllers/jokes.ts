import {Request, Response} from 'express';
import { ERROR_MESSAGES, STATUS } from '../constants';
import { getJoke } from '../services/jokes';

export const getJokeController = async (_req: Request, res: Response) => {
  try {
    const joke = await getJoke();
    res.status(STATUS.OK).json(joke.value);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_GET_USERS });
  }
}