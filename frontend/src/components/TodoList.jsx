import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const todoCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-list">
      <div className="todo-filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All ({todos.length})
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active ({todoCount})
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed ({todos.length - todoCount})
        </button>
      </div>
      
      <div className="todo-items">
        {filteredTodos.length === 0 ? (
          <p className="no-todos">No todos found</p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;