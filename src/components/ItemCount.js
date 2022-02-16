import { getListItemIconUtilityClass } from "@mui/material";
import { maxHeight } from "@mui/system";
import { useState } from "react";

const  ItemCount = (props) => {

    //let valoraciones = 0;
    const [valoraciones, setValoraciones] = useState(0);
    const increment = () => {
        //valoraciones = valoraciones +1;
        setValoraciones(valoraciones+1);
        console.log(valoraciones)
    }
    const desincrement = () => {
        //valoraciones = valoraciones +1;
        setValoraciones(valoraciones-1);
        console.log(valoraciones)
    }

    return (
    <><p>{valoraciones} Camisa Tiger</p>
    <button onClick={increment}>Incrementar</button>
    <button onClick={desincrement}>Desincrementar</button></>

    )
}

export default ItemCount;