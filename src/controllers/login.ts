import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { createJWT } from '../utils/jwt';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../constants';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });
    if (!user) throw new Error(ERROR_MESSAGES.FAILED_GET_USER);

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  
    if (!isPasswordCorrect) throw new Error(ERROR_MESSAGES.INVALID_PASSWORD);
  
    const token = createJWT(user);
  
    return res.status(200).json({
      message: SUCCESS_MESSAGES.USER_LOGGED_IN,
      token
    });
  } catch (error) {
    console.log(error)
  }
};