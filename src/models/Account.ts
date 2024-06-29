import mongoose, { Document, Schema } from 'mongoose';

export interface IAccount extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  type: string;
  balance: number;
  currency: string;
}

const AccountSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IAccount>('Account', AccountSchema);