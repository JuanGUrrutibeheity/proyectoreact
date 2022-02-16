import { useState } from "react";

const  Video = (props) => {

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
    <div className="video-container">
    <div className="video-image">
    <img src={props.thumball} alt={props.title} />
    </div>
    <div className="video-info">
    <h3>{props.title}</h3>
    <p>{valoraciones} estrellas</p>
    <button onClick={increment}>Valorar</button>
    <button onClick={desincrement}>Valorar</button>
    <p>Upload date: {props.dateAdded}</p>
    <h4>Channel's Title: {props.channel}</h4>
    <p>{props.description}</p>
    </div>
    </div>
    )
}

//export default Video;




const data = [
    {
      id: 1,
      title: "Rod Stewart - Young Turks (Official Video)",
      dateAdded: "2009-10-29T21:26:05Z",
      channel: "Rod Stewart",
      thumbnail: "https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg",
      description: "Official music video for Rod Stewart – Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ..."
    },
    {
      id: 2,
      title: "Rod Stewart - Baby Jane (Official Video)",
      dateAdded: "2014-03-01T01:35:21Z",
      channel: "Rod Stewart",
      thumbnail: "https://i.ytimg.com/vi/dxl2r6GuL2w/mqdefault.jpg",
      description: "Official music video for Rod Stewart – “Baby Jane” from 'Body Wishes' (1983) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr Watch all ..."
    },
    {
      id: 3,
      title: "Bizcocho marmolado de naranja. SUPERESPONJOSO",
      dateAdded: "2019-09-25T18:16:56Z",
      channel: "Anna recetasfaciles",
      thumbnail: "https://i.ytimg.com/vi/3GwA45Bcvrs/mqdefault.jpg",
      description: "Compra mi libro de recetas COCINA PARA TRIUNFAR en este link https://amzn.to/2UPUhNZ Mi sartén Tefal Aroma 24 cm https://amzn.to/2WSFjLf Batidora de ..."
    },
    {
      id: 4,
      title: "Jarabe De palo - Ying Yang",
      dateAdded: "2008-12-04T14:37:33Z",
      channel: "Warner Music Spain",
      thumbnail: "https://i.ytimg.com/vi/JSH321S6tGc/mqdefault.jpg",
      description: ""
    },
    {
      id: 5,
      title: "La Niña: ¿Podrá Latinoamérica plantarle cara?",
      dateAdded: "2021-10-23T00:15:00Z",
      channel: "DW Español",
      thumbnail: "https://i.ytimg.com/vi/AsiUBtAQ4wU/mqdefault.jpg",
      description: "Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo."
    }
  ];