import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';
import todoRoutes from './src/routes/todoRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});