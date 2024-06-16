import { Request, Response } from 'express';
import * as userService from '../services/UserService';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'Usuario creado exitosamente', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

// Añadiremos más funciones según sea necesario