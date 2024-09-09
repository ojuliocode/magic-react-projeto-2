import "../App.css"
import { AddCircle, CheckBoxRounded, CheckSharp } from "@mui/icons-material";
import { CalendarMonth } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
import { Check } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Botao(props) {
    const IconComponent = {
        addCircle: AddCircle,
        calendar: CalendarMonth,
        star: Star,
        check: Check,
        tasks: CheckBoxRounded
    }[props.nome];

    return (
        <button className="btn-principal">


            {
                props.rota ? <Link
                    style={{
                        width: '100%', color: 'white', textDecoration: 'none', textAlign: 'start', display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '10px'
                    }}
                    to={props.rota}>

                    <IconComponent sx={{ fontSize: props.iconSize }}>


                    </IconComponent>
                    {props.texto}
                </Link> : <span>{props.texto} </span>
            }
        </button>
    )
}

export default Botao