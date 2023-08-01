import React, { useState } from 'react';
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import './App.css';


const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title, completed: false }]);
  };

  const handleToggleTodo = (id, completed) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onRemove={handleRemoveTodo} />
    </div>
  );
};

export default App;

