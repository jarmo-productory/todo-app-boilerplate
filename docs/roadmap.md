# Modernized Todo App Project Plan

This document outlines the step-by-step process to create a modern Todo app using current versions of MongoDB, Express, React, and Node.js.

## Current Technology Versions (2024)
- **MongoDB**: 8.0.8 (latest stable)
- **Mongoose**: 8.14.1 (latest)
- **Express**: 4.18.x (latest)
- **React**: 18.3.x (latest)
- **Node.js**: 20.x LTS or 22.x (latest)

## Project Structure
The modernized project will follow a clean architecture with two main parts:
1. **Backend API** (Express + MongoDB)
2. **Frontend App** (React)

```
/modern-todo-app
├── backend/       # Express + MongoDB API
├── frontend/      # React frontend
└── README.md
```

## Implementation Tasks

### Phase 1: Set Up Repository & Project Structure
- [x] Set up the project folder structure (backend and frontend directories)

### Phase 2: Implement Backend
- [x] **Initialize the backend project**
  - [x] Create package.json with `npm init -y`
  - [x] Set up project scripts (start, dev, test)

- [x] **Install dependencies**
  - [x] Core: express, mongoose, cors, dotenv
  - [x] Dev: nodemon

- [x] **Create project structure**
  - [x] Set up MVC architecture (models, controllers, routes)
  - [x] Create configuration files
  - [x] Set up error handling middleware

- [x] **Configure MongoDB connection**
  - [x] Set up environment variables for database connection
  - [x] Implement MongoDB connection with latest driver options
  - [x] Add connection error handling and logging

- [x] **Implement Todo model**
  - [x] Create Todo schema with Mongoose 8.x features
  - [x] Add validation and timestamps

- [x] **Create API endpoints**
  - [x] GET /todos - Get all todos
  - [x] GET /todos/:id - Get a specific todo
  - [x] POST /todos - Create a new todo
  - [x] PUT /todos/:id - Update a todo
  - [x] DELETE /todos/:id - Delete a todo
  - [x] Implement proper error handling and status codes

### Phase 3: Implement Frontend
- [x] **Create React app with latest version**
  - [x] Use Create React App or Vite
  - [x] Set up project structure

- [x] **Install frontend dependencies**
  - [x] axios for API requests
  - [x] react-router-dom for routing

- [x] **Set up React structure**
  - [x] Implement feature-based folder organization
  - [x] Set up routing with React Router
  - [x] Create shared components directory

- [x] **Create UI components**
  - [x] App container component
  - [x] TodoList component
  - [x] TodoItem component
  - [x] AddTodo form component
  - [x] EditTodo component

- [x] **Implement state management**
  - [x] Set up Context API for global state
  - [x] Create custom hooks for state operations

- [x] **Add styling**
  - [x] Implement responsive design
  - [x] Create CSS modules or styled-components

### Phase 4: Connect Frontend and Backend
- [x] Configure CORS on the backend
- [x] Set up environment variables for API URLs
- [x] Create API service layer in frontend
- [x] Add loading states and error handling

### Phase 5: Testing and Documentation
- [ ] Add unit tests for backend routes and models
- [ ] Add component tests for React components
- [ ] Update README with usage instructions

### Phase 6: Deployment
- [ ] Prepare application for production
  - [ ] Set up production environment variables
- [ ] Deploy backend to a hosting service (Render, Heroku, etc.)
- [ ] Deploy frontend to static hosting (Netlify, Vercel, etc.)

## Modern Features to Implement

### Backend Modernization

#### ES Modules
```javascript
// Instead of 
const express = require('express');
// Use
import express from 'express';
```

#### Modern MongoDB Connection
```javascript
import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/modern-todo-app');
// No need for useNewUrlParser or useUnifiedTopology in newer versions
```

#### Async/Await Error Handling
```javascript
// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error'
  });
};

app.use(errorHandler);
```

### Frontend Modernization

#### Function Components with Hooks
```javascript
import { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTodos();
  }, []);
  
  // Component logic...
}
```

#### Custom Hooks
```javascript
// hooks/useTodos.js
import { useState, useEffect } from 'react';
import todoService from '../services/todoService';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoService.getAll();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const addTodo = async (todo) => {
    try {
      const newTodo = await todoService.create(todo);
      setTodos([...todos, newTodo]);
      return newTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  // Other CRUD operations
  
  useEffect(() => {
    fetchTodos();
  }, []);
  
  return { 
    todos, 
    loading, 
    error, 
    fetchTodos, 
    addTodo, 
    // other operations 
  };
}
```

## Timeline
- **Phase 1**: 1 day
- **Phase 2**: 2-3 days
- **Phase 3**: 3-4 days
- **Phase 4**: 1 day
- **Phase 5**: 1 day
- **Phase 6**: 1 day

Total estimated time: ~9 days for a complete, modern Todo app 