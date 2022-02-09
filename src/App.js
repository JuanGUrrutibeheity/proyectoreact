import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <div className='App'>
        Hola Coders!
      </div>
      <Navbar />

      <ItemListContainer greeting={CODERHOUSE}/>
    </>


  );
}

export default App;
