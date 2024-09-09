// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, completed: false, favorite: false });
      setTitle('');
    }
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button className='add-btn' type="submit">Adicionar tarefa</button>
    </form>
  );
};

export default TaskForm;
