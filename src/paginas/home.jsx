import ItemListContainer from "../components/ItemListContainer";
import CartWidget from "./components/CartWidget"; 
import Navbar from "./components/navbar/navbar";
const Home = () => {
    return (
        <div>
        <Navbar />
        <ItemListContainer greeting="Mi proyecto de React JS" />
        <CartWidget />
        </div>
        
    );
}

export default Home; 
