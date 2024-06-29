import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';
import { JWT_SECRET } from '../config/env';

export const generateToken = (user: IUser): string => {
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};