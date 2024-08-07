import Tarefa from "../Tarefa/Tarefa"
import "./Tarefas.css"

function Tarefas(props){
    return (
      <main className="tarefas-wrapper">
        <section className="tarefas">
          <h2> {props.titulo} </h2>
          <hr class="dashed-line"/>
          <Tarefa texto="Comprar banan" favorita={true} checked={true}></Tarefa>
        </section>
      </main>
    )
}

export default Tarefas