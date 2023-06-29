import { User } from '../entity/User';
import { AppDataSource } from '../data-source';
import bcrypt from 'bcrypt';
import { ERROR_MESSAGES } from '../constants';

type UserData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return users;
};

export const getUserByEmail = async (email: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });
  if (!user) throw new Error(ERROR_MESSAGES.FAILED_GET_USER);
  return user;
};

export const createUser = async (userData: UserData): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const { email, password, firstName, lastName } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userRepository.create({ email, password: hashedPassword, firstName, lastName });
  await userRepository.save(newUser);
  return newUser;
};