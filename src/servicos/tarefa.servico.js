
export const getTarefas = () => {
    return JSON.parse(localStorage.getItem('tarefas')) || [];
}

export const adicionar = (tarefa, tarefas, setTarefas) => {
    const novasTarefasLocal = [...tarefas, tarefa]
    setTarefas(novasTarefasLocal);
    
    const todasAsTarefas = getTarefas()
    const todasAsTarefasComANova = [...todasAsTarefas, tarefa]
    localStorage.setItem('tarefas', JSON.stringify(todasAsTarefasComANova));
};

export const inverterCompleta = (id, tarefas, setTarefas) => {
    const novasTarefasLocal = tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, completa: !tarefa.completa } : tarefa
    )
    setTarefas(novasTarefasLocal);
    const todasAsTarefas = getTarefas()
    const todasAsTarefasComACompletaInvertida = todasAsTarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, completa: !tarefa.completa } : tarefa
    )
    localStorage.setItem('tarefas', JSON.stringify(todasAsTarefasComACompletaInvertida));
};

export const inverterFavorita = (id, tarefas, setTarefas) => {
    const novasTarefasLocal = tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, favorita: !tarefa.favorita } : tarefa
    )
    setTarefas(novasTarefasLocal);
    const todasAsTarefas = getTarefas()
    const todasAsTarefasComAFavoritaInvertida = todasAsTarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, favorita: !tarefa.favorita } : tarefa
    )
    localStorage.setItem('tarefas', JSON.stringify(todasAsTarefasComAFavoritaInvertida));
};

export const deletar = (id, tarefas, setTarefas) => {
    const todasAsTarefas = getTarefas()
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    const todasAsTarefasSemADeletada = todasAsTarefas.filter(tarefa => tarefa.id !== id)
    localStorage.setItem('tarefas', JSON.stringify(todasAsTarefasSemADeletada));
};
