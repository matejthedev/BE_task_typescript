import bcrypt from 'bcrypt';
import { createJWT } from '../utils/jwt';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../constants';
import { getUserByEmail } from './users';

export const login = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error(ERROR_MESSAGES.INVALID_EMAIL);
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) throw new Error(ERROR_MESSAGES.INVALID_PASSWORD);

  const token = createJWT(user);

  return {
    message: SUCCESS_MESSAGES.USER_LOGGED_IN,
    token,
  };
};
