# Modernized Todo App - Quick Start Guide

This guide provides the initial steps to start building the modernized Todo app.

## Prerequisites

Make sure you have the following installed:
- Node.js (v20.x LTS or v22.x)
- MongoDB 8.x
- Git

## Step 1: Create Project Structure

```bash
# Create project directory
mkdir modern-todo-app
cd modern-todo-app

# Initialize git repository
git init
echo "node_modules\n.env\n.DS_Store\n*.log" > .gitignore

# Create main directories
mkdir -p backend/src/{models,controllers,routes,middleware,config,utils}
mkdir -p frontend
```

## Step 2: Set Up Backend

```bash
# Navigate to backend directory
cd backend

# Initialize package.json
npm init -y

# Update package.json for ES modules
```

Edit `package.json` to include:
```json
{
  "name": "modern-todo-api",
  "version": "1.0.0",
  "description": "Modern Todo API with Express and MongoDB",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "keywords": ["todo", "api", "express", "mongodb"],
  "author": "",
  "license": "ISC"
}
```

```bash
# Install dependencies
npm install express mongoose cors dotenv
npm install --save-dev nodemon

# Create initial files
touch index.js
touch .env
touch src/app.js
touch src/config/db.js
touch src/models/Todo.js
touch src/controllers/todoController.js
touch src/routes/todoRoutes.js
touch src/middleware/errorHandler.js
```

## Step 3: Configure Backend

### Environment Variables (.env)
```
PORT=5050
MONGODB_URI=mongodb://127.0.0.1:27017/modern-todo-app
NODE_ENV=development
```

### MongoDB Connection (src/config/db.js)
```javascript
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
```

### Todo Model (src/models/Todo.js)
```javascript
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text for the todo'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
```

### App Configuration (src/app.js)
```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/todos', todoRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Modern Todo API' });
});

// Error handling middleware
app.use(errorHandler);

export default app;
```

### Server Entry Point (index.js)
```javascript
import app from './src/app.js';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Step 4: Set Up Frontend

```bash
# Navigate back to project root
cd ..

# Create React app using create-react-app or Vite
# Using Create React App:
npx create-react-app frontend

# OR using Vite (recommended for better performance):
npm create vite@latest frontend -- --template react
```

## Step 5: Configure Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install axios react-router-dom
```

If you used Vite, update `vite.config.js` to add proxy for API calls:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      },
    },
  },
});
```

## Step 6: Run the Development Servers

### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
# Open a new terminal
cd frontend
npm run dev # if using Vite
# or
npm start # if using Create React App
```

## Next Steps

After setting up the basic structure, continue with:

1. Implementing the Todo API endpoints (create, read, update, delete)
2. Building React components for the Todo app
3. Connecting the frontend to the backend API
4. Adding authentication (optional)
5. Implementing testing
6. Preparing for deployment

Refer to the detailed tasklist.md for a complete breakdown of all required tasks.

## Useful Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/) 