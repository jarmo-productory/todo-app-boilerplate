import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onUpdate(todo._id, { ...todo, title: editText });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${getPriorityClass(todo.priority)}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <div className="edit-actions">
              <button type="submit" className="btn btn-save">Save</button>
              <button type="button" onClick={handleCancel} className="btn btn-cancel">Cancel</button>
            </div>
          </form>
        ) : (
          <div className="todo-text">
            <span className="todo-title">{todo.title}</span>
            {todo.description && <p className="todo-description">{todo.description}</p>}
            <div className="todo-meta">
              <span className={`priority ${todo.priority}`}>{todo.priority}</span>
              {todo.dueDate && (
                <span className="due-date">Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="todo-actions">
        <button onClick={() => setIsEditing(!isEditing)} className="btn btn-edit">
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => onDelete(todo._id)} className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;