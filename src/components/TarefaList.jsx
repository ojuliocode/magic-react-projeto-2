
import { Delete, RadioButtonChecked, RadioButtonUnchecked, Star, StarBorderOutlined } from '@mui/icons-material';
import React from 'react';

const TarefaList = ({ tarefas, aoMudarComplete, aoMudarFavorite, aoDeletar, setTarefas }) => {
    return (
        <ul className='tarefas-lista'>
            {tarefas.map(tarefa => (
                <li className='tarefa-unica' key={tarefa.id}>
                    <section className='icone-titulo' onClick={() => aoMudarComplete(tarefa.id, tarefas, setTarefas)}>

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
                        <div onClick={() => aoMudarFavorite(tarefa.id, tarefas, setTarefas)}>
                            {tarefa.favorita ? <Star /> : <StarBorderOutlined />}
                        </div>
                        <div onClick={() => aoDeletar(tarefa.id, tarefas, setTarefas)}>
                            <Delete />
                        </div>
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default TarefaList;
