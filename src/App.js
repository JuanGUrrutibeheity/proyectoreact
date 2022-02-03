import './App.css';
import {Curso} from './Curso';

const App = () => {
  return (
  <>
  <div className='App'>
  Hola Coders!
  </div>
  <Curso curso="React Js" profesor="Leo Messi" duracion="9"></Curso>
  <Curso curso="Javascript" profesor="Diego Maradona" duracion="7"></Curso>
  </>
  
  );
}

export default App;
