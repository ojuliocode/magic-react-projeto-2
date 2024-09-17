
import React, { useState, useEffect } from 'react';
import TarefaList from '../components/TarefaList';
import TarefaForm from '../components/TarefaForm';

const AllTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        const storedTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        console.log(storedTarefas)
        setTarefas(storedTarefas);
    }, []);

    useEffect(() => {
        console.log(tarefas)
    }, [tarefas]);

    const addTarefa = (tarefa) => {
        const newTarefas = [...tarefas, { id: Date.now(), ...tarefa }]
        setTarefas(newTarefas);
        localStorage.setItem('tarefas', JSON.stringify(newTarefas));
    };

    const toggleComplete = (id) => {
        const newTarefas = tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, completa: !tarefa.completa } : tarefa
        )
        setTarefas(newTarefas);
        localStorage.setItem('tarefas', JSON.stringify(newTarefas));
    };

    const toggleFavorite = (id) => {
        const newTarefas = tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, favorite: !tarefa.favorite } : tarefa
        )
        setTarefas(newTarefas);
        localStorage.setItem('tarefas', JSON.stringify(newTarefas));
    };

    const deleteTarefa = (id) => {
        const newTarefas = tarefas.filter(tarefa => tarefa.id !== id)
        setTarefas(newTarefas);

        localStorage.setItem('tarefas', JSON.stringify(newTarefas));
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

export default AllTarefas;
