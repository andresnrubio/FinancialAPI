import User, { IUser } from '../models/User';

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const user = new User(userData);
  await user.save();
  return user;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email });
};

export const getUserById = async (userId: string): Promise<IUser | null> => {
  try {
    return await User.findById(userId).select('-password');
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    return null;
  }
};

export const authenticateUser = async (email: string, password: string): Promise<IUser | null> => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return null;

  return user;
};

// Añadiremos más funciones según sea necesario
