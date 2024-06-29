import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tu_base_de_datos';
export const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
export const JWT_SECRET = "tu_secreto_jwt"
=======
export const JWT_SECRET = process.env.JWT_SECRET || ''
>>>>>>> 0d602610f98b317319468e944a6f4b02573903ab
// Otras variables de entorno...