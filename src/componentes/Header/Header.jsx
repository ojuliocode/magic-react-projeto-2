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
            <section className="perfil">
                <div>
                    <h3>João césar</h3>
                    <span>joaocesar@gmail.com</span>
                </div>
                <AccountCircle sx={{fontSize: 50}}></AccountCircle>
            </section>
        </header>
    )
}

export default Header