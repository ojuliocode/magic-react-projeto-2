import "./NavBar.css"
import Botao from '../Botao/Botao'

function NavBar(){
    return (
        <nav className="nav-bar">
            <Botao nome="addCircle" texto="Nova Tarefa"/>
            <Botao nome="calendar" texto="Para hoje"/>
            <Botao nome="star" texto="Tarefas favoritas"/>
        </nav>
    )
}

export default NavBar