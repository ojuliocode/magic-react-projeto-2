import "./Botao.css"
import { AddCircle } from "@mui/icons-material";
import { CalendarMonth } from "@mui/icons-material";
import { Star } from "@mui/icons-material";

function Botao(props){
    const IconComponent = {
        addCircle: AddCircle,
        calendar: CalendarMonth,
        star: Star,
      }[props.nome];

    return (
        <button className="btn-principal">
            <IconComponent></IconComponent>
            <span> {props.texto} </span>
        </button>
    )
}

export default Botao