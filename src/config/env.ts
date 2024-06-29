import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tu_base_de_datos';
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = "tu_secreto_jwt"
// Otras variables de entorno...