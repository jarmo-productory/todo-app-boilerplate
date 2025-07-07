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
      setTodos([newTodo, ...todos]);
      return newTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const updated = await todoService.update(id, updatedTodo);
      setTodos(todos.map(todo => todo._id === id ? updated : todo));
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.delete(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const toggleComplete = async (id) => {
    const todo = todos.find(t => t._id === id);
    if (todo) {
      await updateTodo(id, { ...todo, completed: !todo.completed });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete
  };
}