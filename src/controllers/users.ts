import {Request, Response} from 'express';
import { User } from '../entity/User';
import { AppDataSource } from '../data-source';
import { ERROR_MESSAGES, STATUS } from '../constants';
import bcrypt from 'bcrypt';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.status(STATUS.OK).json(users);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_GET_USERS });
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = userRepository.create({ email, password: hashedPassword, firstName, lastName });
    await userRepository.save(newUser);
    res.status(STATUS.CREATED).json(newUser);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_CREATE_USER });
  }
}