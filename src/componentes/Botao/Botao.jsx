import "./Botao.css"
import { AddCircle } from "@mui/icons-material";
import { CalendarMonth } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
import { Check } from "@mui/icons-material";

function Botao(props){
    const IconComponent = {
        addCircle: AddCircle,
        calendar: CalendarMonth,
        star: Star,
        check: Check
      }[props.nome];

    return (
        <button className="btn-principal">
            <IconComponent sx={{ fontSize: props.iconSize }}></IconComponent>
            <span> {props.texto} </span>
        </button>
    )
}

export default Botao