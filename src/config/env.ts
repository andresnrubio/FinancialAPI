import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tu_base_de_datos';
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || ''
// Otras variables de entorno...