import { connectDB } from "./config/database";
import { PORT } from './config/env';
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
import userRoutes from './routes/userRoutes'

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

connectDB();

// Aquí irán las rutas
app.use('/api/users', userRoutes);



app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));