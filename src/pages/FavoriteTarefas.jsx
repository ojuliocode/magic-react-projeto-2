
import React, { useState, useEffect } from 'react';
import TarefaList from '../components/TarefaList';
import TarefaForm from '../components/TarefaForm';

const FavoriteTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const addTarefa = (tarefa) => {
        tarefa.favorite = true
        const newTarefas = [...tarefas, { id: Date.now(), ...tarefa }]
        setTarefas(newTarefas);
        localStorage.setItem('tarefas', JSON.stringify(newTarefas));
    };
    useEffect(() => {
        const storedTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        setTarefas(storedTarefas.filter(tarefa => tarefa.favorite));
    }, []);

    const toggleComplete = (id) => {
        const editedTarefas = tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, completa: !tarefa.completa } : tarefa
        )
        setTarefas(editedTarefas);

        localStorage.setItem('tarefas', JSON.stringify(editedTarefas));
    };

    const toggleFavorite = (id) => {
        const editedTarefas = tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, favorite: !tarefa.favorite } : tarefa
        )
        setTarefas(editedTarefas);

        localStorage.setItem('tarefas', JSON.stringify(editedTarefas));
    };

    const deleteTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    };

    return (
        <div className='tarefas'>
            <TarefaForm onAddTarefa={addTarefa} />
            <TarefaList
                tarefas={tarefas}
                onToggleComplete={toggleComplete}
                onToggleFavorite={toggleFavorite}
                onDelete={deleteTarefa}
            />
        </div>
    );
};

export default FavoriteTarefas;
