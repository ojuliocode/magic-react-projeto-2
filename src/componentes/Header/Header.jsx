import "./Header.css"
import { AccountCircle, CheckCircle, Person4Rounded } from "@mui/icons-material"
import { Person2Rounded } from "@mui/icons-material"
function Header(){
    return(
        <header className="header">
            <section className="titulo">

            <CheckCircle color="success" sx={{fontSize: 50}}></CheckCircle>
            <h1>Tarefas App</h1>
            </section>
        </header>
    )
}

export default Header