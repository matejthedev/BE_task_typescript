import { User } from '../entity/User';
import { AppDataSource } from '../data-source';
import bcrypt from 'bcrypt';

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

export const createUser = async (userData: UserData): Promise<UserData> => {
  const userRepository = AppDataSource.getRepository(User);
  const { email, password, firstName, lastName } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userRepository.create({ email, password: hashedPassword, firstName, lastName });
  await userRepository.save(newUser);
  return newUser;
};