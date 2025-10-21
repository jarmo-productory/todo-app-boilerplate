# Modern Todo App

A full-stack todo application built with the MERN stack (MongoDB, Express, React, Node.js).

## Technology Stack

- **Backend**:
  - Node.js (20.x LTS/22.x)
  - Express (4.18.x)
  - MongoDB (8.0.x)
  - Mongoose (8.14.x)

- **Frontend**:
  - React (18.3.x)
  - React Router
  - Axios

## Project Structure

```
/modern-todo-app
├── backend/                # Express + MongoDB API
│   ├── src/
│   │   ├── config/         # DB connection, env config
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # Express routes
│   │   ├── middleware/     # Custom middleware
│   │   └── utils/          # Utility functions
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Shared components
│   │   ├── features/       # Feature-based components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
└── docs/                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (20.x LTS or 22.x)
- MongoDB (8.0.x)

### Installation

1. Clone the repository
2. Set up backend:
   ```
   cd backend
   npm install
   ```
3. Set up frontend:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```
2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos by status
- Responsive design for various screen sizes

## Development Process

Please refer to the [project roadmap](docs/roadmap.md) for the development roadmap. 