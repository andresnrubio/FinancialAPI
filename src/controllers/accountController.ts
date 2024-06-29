import { Request, Response } from 'express';
import * as accountService from '../services/accountService';

export const createAccount = async (req: Request, res: Response): Promise<void> => {
  try {
    const account = await accountService.createAccount({ ...req.body, userId: req.userId });
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cuenta', error });
  }
};

export const getUserAccounts = async (req: Request, res: Response): Promise<void> => {
  try {
    const accounts = await accountService.getAccountsByUserId(req.userId!);
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las cuentas', error });
  }
};

export const getAccount = async (req: Request, res: Response): Promise<void> => {
  try {
    const account = await accountService.getAccountById(req.params.accountId, req.userId!);
    if (!account) {
      res.status(404).json({ message: 'Cuenta no encontrada' });
      return;
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la cuenta', error });
  }
};

export const updateAccount = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedAccount = await accountService.updateAccount(req.params.accountId, req.userId!, req.body);
    if (!updatedAccount) {
      res.status(404).json({ message: 'Cuenta no encontrada' });
      return;
    }
    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la cuenta', error });
  }
};

export const deleteAccount = async (req: Request, res: Response): Promise<void> => {
  try {
    const isDeleted = await accountService.deleteAccount(req.params.accountId, req.userId!);
    if (!isDeleted) {
      res.status(404).json({ message: 'Cuenta no encontrada' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la cuenta', error });
  }
};