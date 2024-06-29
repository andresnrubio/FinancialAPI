import { connectDB } from "./config/database";
import { PORT } from './config/env';
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
import userRoutes from './routes/userRoutes'
import accountRoutes from './routes/accountRoutes'

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/accounts', accountRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});