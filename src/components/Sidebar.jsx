
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Botao from './Botao';

const Sidebar = () => {
    const location = useLocation()

    return (
        <div className="nav-bar">
            <Botao estaSelecionado={location.pathname == '/'} nome="check" rota="/" iconSize="10" texto="Todas" />
            <Botao estaSelecionado={location.pathname == '/completas'} nome="tarefas" rota="/completas" iconSize="10" texto="Completas" />
            <Botao estaSelecionado={location.pathname == '/favoritas'} nome="star" rota="/favoritas" iconSize="10" texto="Favoritas" />
        </div>
    );
};

export default Sidebar;
