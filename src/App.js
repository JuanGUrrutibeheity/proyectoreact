import './App.css';
import {Curso} from './Curso';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className='App'>
        Hola Coders!
      </div>
      <Navbar />
      <Curso curso="React Js" profesor="Leo Messi" duracion="9"></Curso>
      <Curso curso="Javascript" profesor="Diego Maradona" duracion="7"></Curso>
    </>

  );
}

export default App;
