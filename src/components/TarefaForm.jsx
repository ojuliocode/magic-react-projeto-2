
import React, { useState } from 'react';

const TarefaForm = ({ onAddTarefa, tipo, tarefas, setTarefas }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            let tarefa = {title, completa: false, favorita: false}
            if(tipo == 'completa') tarefa.completa = true ;
            if(tipo == 'favorita') tarefa.favorita = true;
            onAddTarefa(tarefa, tarefas, setTarefas);
            setTitle('');
        }
    };

    return (
        <form className='tarefa-form' onSubmit={handleSubmit}>
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

export default TarefaForm;
