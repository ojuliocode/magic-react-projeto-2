// src/pages/FavoriteTasks.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const FavoriteTasks = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    task.favorite = true
    const newTasks = [...tasks, { id: Date.now(), ...task }]
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks.filter(task => task.favorite));
  }, []);

  const toggleComplete = (id) => {
    const editedTasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    setTasks(editedTasks);
    
    localStorage.setItem('tasks', JSON.stringify(editedTasks));
  };

  const toggleFavorite = (id) => {
    const editedTasks = tasks.map(task =>
        task.id === id ? { ...task, favorite: !task.favorite } : task
      )
    setTasks(editedTasks);
    
    localStorage.setItem('tasks', JSON.stringify(editedTasks));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='tasks'>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onToggleFavorite={toggleFavorite}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default FavoriteTasks;