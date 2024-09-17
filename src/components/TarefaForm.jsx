
import React, { useState } from 'react';

const TarefaForm = ({ onAddTarefa, tipo, tarefas, setTarefas }) => {
    const [titulo, setTitulo] = useState('');

    const handleSubmit = (e) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        e.preventDefault();
        if (titulo.trim()) {
            let tarefa = {titulo, id, completa: false, favorita: false}
            if(tipo == 'completa') tarefa.completa = true ;
            if(tipo == 'favorita') tarefa.favorita = true;
            onAddTarefa(tarefa, tarefas, setTarefas);
            setTitulo('');
        }
    };

    return (
        <form className='tarefa-form' onSubmit={handleSubmit}>
            <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button className='add-btn' type="submit">Adicionar tarefa</button>
        </form>
    );
};

export default TarefaForm;
