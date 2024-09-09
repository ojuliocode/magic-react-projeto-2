// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks';
import FavoriteTasks from './pages/FavoriteTasks';
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
                        <Route path="/" element={<AllTasks />} />
                        <Route path="/completed" element={<CompletedTasks />} />
                        <Route path="/favorites" element={<FavoriteTasks />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
