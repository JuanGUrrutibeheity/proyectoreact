import { useState } from "react";

const  ItemCount = (props) => {

    //let valoraciones = 0;
    const [valoraciones, setValoraciones] = useState(1);
    const increment = () => {
        if(valoraciones < 5)
        //valoraciones = valoraciones +1;
        setValoraciones(valoraciones+1);
        console.log(valoraciones);
    }
    const decrement = () => {
        if(valoraciones > 0)
        //valoraciones = valoraciones +1;
        setValoraciones(valoraciones-1);
        console.log(valoraciones);
    }

    return (
    <><p>{valoraciones} Camisa Tiger</p>
    <button onClick={increment}>Incrementar</button>
    <button onClick={decrement}>Desincrementar</button></>

    )
}

export default ItemCount;