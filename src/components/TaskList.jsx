// src/components/TaskList.js
import { Star, StarBorderOutlined } from '@mui/icons-material';
import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onToggleFavorite, onDelete }) => {
  return (
    <ul className='tarefas'>
      {tasks.map(task => (
        <li className='tarefa-unica' key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => onToggleComplete(task.id)}
          >
            {task.title}
          </span>
          <section className='actions'>
          <div onClick={() => onToggleFavorite(task.id)}>
            {task.favorite ? <Star /> : <StarBorderOutlined />}
          </div>
          <div onClick={() => onDelete(task.id)}>
            
          </div>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
