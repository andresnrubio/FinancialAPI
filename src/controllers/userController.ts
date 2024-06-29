import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'Usuario creado exitosamente', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.getUserById(req.userId!);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    res.json({ user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Añadiremos más funciones según sea necesario