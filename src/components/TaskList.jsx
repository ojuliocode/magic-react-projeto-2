// src/components/TaskList.js
import { Delete, RadioButtonChecked, RadioButtonUnchecked, Star, StarBorderOutlined } from '@mui/icons-material';
import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onToggleFavorite, onDelete }) => {
    return (
        <ul className='tarefas'>
            {tasks.map(task => (
                <li className='tarefa-unica' key={task.id}>
                    <section className='icone-titulo' onClick={() => onToggleComplete(task.id)}>

                        {
                            task.completed ?
                                <RadioButtonChecked />
                                :
                                <RadioButtonUnchecked />
                        }
                        <span
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}

                        >
                            {task.title}
                        </span>
                    </section>
                    <section className='actions'>
                        <div onClick={() => onToggleFavorite(task.id)}>
                            {task.favorite ? <Star /> : <StarBorderOutlined />}
                        </div>
                        <div onClick={() => onDelete(task.id)}>
                            <Delete />
                        </div>
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
