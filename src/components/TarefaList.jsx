
import { Delete, RadioButtonChecked, RadioButtonUnchecked, Star, StarBorderOutlined } from '@mui/icons-material';
import React from 'react';

const TarefaList = ({ tarefas, onToggleComplete, onToggleFavorite, onDelete }) => {
    return (
        <ul className='tarefas-lista'>
            {tarefas.map(tarefa => (
                <li className='tarefa-unica' key={tarefa.id}>
                    <section className='icone-titulo' onClick={() => onToggleComplete(tarefa.id)}>

                        {
                            tarefa.completa ?
                                <RadioButtonChecked />
                                :
                                <RadioButtonUnchecked />
                        }
                        <span
                            style={{ textDecoration: tarefa.completa ? 'line-through' : 'none' }}

                        >
                            {tarefa.title}
                        </span>
                    </section>
                    <section className='actions'>
                        <div onClick={() => onToggleFavorite(tarefa.id)}>
                            {tarefa.favorite ? <Star /> : <StarBorderOutlined />}
                        </div>
                        <div onClick={() => onDelete(tarefa.id)}>
                            <Delete />
                        </div>
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default TarefaList;
