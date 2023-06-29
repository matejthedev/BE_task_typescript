import jwt from 'jsonwebtoken';

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const createJWT = (user: User) => jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET_KEY as string,
  { expiresIn: process.env.JWT_EXPIRATION }
);

export const verifyJWT = (token: string) => { 
  return jwt.verify(
  token,
  process.env.JWT_SECRET_KEY as string
  );
}