import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AllTarefas from './pages/AllTarefas';
import CompletedTarefas from './pages/CompletedTarefas';
import FavoriteTarefas from './pages/FavoriteTarefas';
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
                        <Route path="/" element={<AllTarefas />} />
                        <Route path="/completas" element={<CompletedTarefas />} />
                        <Route path="/favorites" element={<FavoriteTarefas />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
