
import React, { useState, useEffect } from 'react';
import TarefaList from '../components/TarefaList';
import TarefaForm from '../components/TarefaForm';

const CompletedTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const addTarefa = (tarefa) => {
        tarefa.completa = true
        const newTarefas = [...tarefas, { id: Date.now(), ...tarefa }]
        setTarefas(newTarefas);
        localStorage.setItem('tarefas', JSON.stringify(newTarefas));
    };
    useEffect(() => {
        const storedTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        setTarefas(storedTarefas.filter(tarefa => tarefa.completa));
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
        const todasAsTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        
        // Local
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));

        const todasAsTarefasSemADeletada = todasAsTarefas.filter(tarefa => tarefa.id !== id)
        
        localStorage.setItem('tarefas', JSON.stringify(todasAsTarefasSemADeletada));

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

export default CompletedTarefas;
