import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Tarefas from './pages/Tarefas';
import TarefasCompletas from './pages/TarefasCompletas';
import TarefasFavoritas from './pages/TarefasFavoritas';
import { CheckCircle } from '@mui/icons-material';


import "./App.css"
const App = () => {
    return (
        <Router>
            <header> 
                <h1>Tarefas App</h1>   
                <CheckCircle/> 
            </header>
            <div className="container-do-conteudo">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Tarefas />} />
                        <Route path="/completas" element={<TarefasCompletas />} />
                        <Route path="/favoritas" element={<TarefasFavoritas />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
