import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';
import todoRoutes from './src/routes/todoRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();

connectDB();

// CORS Configuration
const corsOptions = {
  credentials: true,
};

if (process.env.NODE_ENV === 'production') {
  if (!process.env.ALLOWED_ORIGINS) {
    console.warn('WARNING: ALLOWED_ORIGINS environment variable is not set in production.');
  }
  const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];
  corsOptions.origin = (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  };
} else {
  // In development, allow any origin as the proxy is the gatekeeper.
  corsOptions.origin = (origin, callback) => {
    callback(null, true);
  };
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});