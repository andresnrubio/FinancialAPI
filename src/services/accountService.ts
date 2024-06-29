import Account, { IAccount } from '../models/Account';
import mongoose from 'mongoose';

export const createAccount = async (accountData: Partial<IAccount>): Promise<IAccount> => {
  const account = new Account(accountData);
  return await account.save();
};

export const getAccountsByUserId = async (userId: string): Promise<IAccount[]> => {
  return await Account.find({ userId });
};

export const getAccountById = async (accountId: string, userId: string): Promise<IAccount | null> => {
  return await Account.findOne({ _id: accountId, userId });
};

export const updateAccount = async (accountId: string, userId: string, updateData: Partial<IAccount>): Promise<IAccount | null> => {
  return await Account.findOneAndUpdate({ _id: accountId, userId }, updateData, { new: true });
};

export const deleteAccount = async (accountId: string, userId: string): Promise<boolean> => {
  const result = await Account.deleteOne({ _id: accountId, userId });
  return result.deletedCount === 1;
};