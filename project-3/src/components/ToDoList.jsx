import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoList;

