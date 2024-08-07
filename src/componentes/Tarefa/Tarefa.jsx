import "./Tarefa.css"
import { RadioButtonChecked, RadioButtonUnchecked, StarOutline, Star } from "@mui/icons-material"

function Tarefa(props){
    return (
      <section className="tarefa-unica">
        <section className="icone-com-texto">

        {
          props.checked ? <RadioButtonChecked /> : <RadioButtonUnchecked /> 
        }
        <span>
            {props.texto}
        </span>
        </section>
        {
          props.favorita ? <Star /> : <StarOutline />
        }
      </section>
    )
}

export default Tarefa