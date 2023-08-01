import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const handleToggle = () => {
    onToggle(todo.id, !todo.completed);
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <p className="todo-title" onClick={handleToggle}>{todo.title}</p>
      </div>
      <p className="todo-status">Status: {todo.completed ? 'Completed' : 'Pending'}</p>
      <div className="todo-buttons">
        <button className="update-button" onClick={handleToggle}>Update Status</button>
        <button className="remove-button" onClick={() => onRemove(todo.id)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoItem;

