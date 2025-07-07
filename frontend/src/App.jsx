import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo, toggleComplete } = useTodos();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Modern Todo App</h1>
        <p>Built with React, Express, and MongoDB</p>
      </header>
      
      <main className="app-main">
        <TodoForm onSubmit={addTodo} />
        <TodoList 
          todos={todos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      </main>
    </div>
  );
}

export default App;
