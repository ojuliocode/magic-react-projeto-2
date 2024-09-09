// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Botao from './Botao';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Botao nome="check" rota="/" iconSize="10" texto="Todas" />
            <Botao nome="tasks" rota="/completed" iconSize="10" texto="Completas" />
            <Botao nome="star" rota="/favorites" iconSize="10" texto="Favoritas" />

        </div>
    );
};

export default Sidebar;
