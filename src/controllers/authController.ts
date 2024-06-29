import { Request, Response } from 'express';
import * as userService from '../services/userService';
import * as authService from '../services/authService';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await userService.authenticateUser(email, password);

    if (!user) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }

    const token = authService.generateToken(user);
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};