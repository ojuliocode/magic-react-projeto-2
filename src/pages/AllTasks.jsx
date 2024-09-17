
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log(storedTasks)
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        console.log(tasks)
    }, [tasks]);

    const addTask = (task) => {
        const newTasks = [...tasks, { id: Date.now(), ...task }]
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const toggleComplete = (id) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, completa: !task.completa } : task
        )
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const toggleFavorite = (id) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, favorite: !task.favorite } : task
        )
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks);

        localStorage.setItem('tasks', JSON.stringify(newTasks));
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

export default AllTasks;
