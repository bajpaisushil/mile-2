import React, { useState } from 'react';


const TodoForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    onSubmit(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
