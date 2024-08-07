import "./NavBar.css"
import Botao from '../Botao/Botao'

function NavBar(){
    return (
        <nav className="nav-bar">
            <Botao iconSize={55} nome="addCircle" texto="Nova Tarefa"/>
            <Botao iconSize={30} nome="calendar" texto="Para hoje"/>
            <Botao iconSize={30} nome="star" texto="Tarefas favoritas"/>
            <Botao iconSize={30} nome="check" texto="Tarefas completadas"/>
        </nav>
    )
}

export default NavBar