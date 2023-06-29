import jwt from 'jsonwebtoken';

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const EXPIRATION_TIME = process.env.JWT_EXPIRATION;

export const createJWT = (user: User) => jwt.sign(
  { id: user.id, email: user.email },
  SECRET_KEY as string,
  { expiresIn: EXPIRATION_TIME }
);

exports.createJWT = createJWT;