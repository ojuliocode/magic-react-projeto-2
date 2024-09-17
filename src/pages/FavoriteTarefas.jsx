
import React, { useState, useEffect } from 'react';
import TarefaList from '../components/TarefaList';
import TarefaForm from '../components/TarefaForm';
import * as servicoTarefa from '../servicos/tarefa.servico';

const FavoriteTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    
    useEffect(() => {
        const storedTarefas = servicoTarefa.getTarefas()
        setTarefas(storedTarefas.filter(tarefa => tarefa.favorite));
    }, []);

    return (
        <div className='tarefas'>
            <TarefaForm tarefas={tarefas} setTarefas={setTarefas} tipo="favorita" onAddTarefa={servicoTarefa.adicionar} />
            <TarefaList
                tarefas={tarefas}
                setTarefas={setTarefas}
                onToggleComplete={servicoTarefa.inverterCompleta}
                onToggleFavorite={servicoTarefa.inverterFavorita}
                onDelete={servicoTarefa.deletar}
            />
        </div>
    );
};

export default FavoriteTarefas;
