export const Curso = (props) => {
    return(
    <>
    <hr />
    <h1>{props.curso}</h1>
    <p>Profesor: {props.profesor}</p>
    <p>Duracion: {props.duracion} semanas</p></>
    );

}