# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Backend (Node.js + Express + MongoDB)
```bash
cd backend
npm run dev        # Start development server with nodemon
npm start          # Start production server
```

### Frontend (React + Vite)
```bash
cd frontend
npm run dev        # Start Vite dev server (typically port 5173)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## Architecture Overview

This is a MERN stack todo application with a clear separation between frontend and backend:

### Backend Architecture
- **Entry Point**: `backend/index.js` - Express server setup with CORS, middleware, and route mounting
- **Routes**: RESTful API at `/api/todos` with standard CRUD operations
- **Controllers**: `backend/src/controllers/todoController.js` - business logic for todo operations
- **Models**: `backend/src/models/Todo.js` - Mongoose schema with title, description, completed, priority, and dueDate fields
- **Database**: MongoDB connection in `backend/src/config/database.js`
- **Middleware**: Error handling middleware in `backend/src/middleware/errorHandler.js`

### Frontend Architecture
- **Entry Point**: `frontend/src/main.jsx` - React app initialization
- **Main App**: `frontend/src/App.jsx` - uses the `useTodos` hook for state management
- **Custom Hook**: `frontend/src/hooks/useTodos.js` - centralized todo state management with CRUD operations
- **API Service**: `frontend/src/services/todoService.js` - axios-based API client (expects backend on port 3001)
- **Components**:
  - `TodoForm.jsx` - form for creating new todos
  - `TodoList.jsx` - renders list of todos
  - `TodoItem.jsx` - individual todo item component

### Key Integration Points
- Frontend expects backend API at `http://localhost:3001/api/todos`
- Backend is configured for CORS with frontend ports 5173/5174
- Todo data structure: `{ title, description, completed, priority, dueDate, timestamps }`

### Development Notes
- Both frontend and backend use ES modules (type: "module" in package.json)
- Backend runs on port 5000 by default (or PORT env var)
- Frontend Vite dev server typically runs on port 5173
- Requires MongoDB connection (configured via environment variables)
- API responses follow pattern: `{ success: boolean, data: any }`

### Configuration Files
- Frontend uses Vite with React plugin and ESLint configuration
- Backend uses nodemon for development hot reloading
- Environment variables handled via dotenv in backend

## Key Development Lessons

### Port Configuration Issues
- **Problem**: Port 5000 is occupied by macOS AirPlay/Control Center service
- **Solution**: Use port 3001 for backend development to avoid conflicts
- **Important**: Always check `lsof -i :5000` before using port 5000 on macOS
- **Configuration Chain**: Backend .env PORT → Vite proxy target → Frontend API calls

### Environment Variables
- Backend requires `.env` file in `backend/` directory (not project root)
- Critical variables: `MONGODB_URI` and `PORT`
- dotenv loads from current working directory, so run commands from correct folder

### Development Startup Issues
- MongoDB connection failures cause backend crashes - always check connection string
- Multiple processes may conflict - use `lsof -ti:PORT | xargs kill -9` to clean up
- Vite proxy automatically restarts when vite.config.js changes
- Backend needs both `MONGODB_URI` and running MongoDB instance