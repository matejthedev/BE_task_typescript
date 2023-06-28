import {Request, Response} from 'express';
import { ERROR_MESSAGES, STATUS } from '../constants';

export const getJoke = async (_req: Request, res: Response) => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();
    res.status(STATUS.OK).json(joke.value);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_GET_USERS });
  }
}