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
└── documentation/          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v20.x LTS or newer)
- A running MongoDB instance.

### 1. Install Dependencies

Install dependencies for both the `backend` and `frontend` directories.
```bash
# From the project root, install backend dependencies
cd backend
npm install

# Then, install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment

The backend requires environment variables to run.

1.  Navigate to the `backend` directory.
2.  Create a `.env` file by copying the example: `cp .env.example .env`
3.  Open the newly created `.env` file and add your unique `MONGODB_URI`. The `PORT` should remain `3001` to work with the frontend proxy. For production, you would also set `ALLOWED_ORIGINS`.

### 3. Run the Application

You need to run two processes in separate terminals from the project root.

**Terminal 1: Start Backend**
```bash
cd backend
npm run dev
```

**Terminal 2: Start Frontend**
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`. API requests are automatically proxied to the backend on port 3001.

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos by status
- Responsive design for various screen sizes

## Development Process

Please refer to the [project tasklist](documentation/tasklist.md) for the development roadmap. 