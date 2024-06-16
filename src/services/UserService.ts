import User, { IUser } from '../models/User';

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const user = new User(userData);
  await user.save();
  return user;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email });
};

// Añadiremos más funciones según sea necesario
