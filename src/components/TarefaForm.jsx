
import React, { useState } from 'react';

const TarefaForm = ({ onAddTarefa }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTarefa({ title, completa: false, favorite: false });
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
