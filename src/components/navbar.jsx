import   Appbar from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
function Navbar() {
    return (
    <div>
        <button type="button" className="btn btn-primary">Primary</button>
    </div> >
    <>
    <Appbar position='fixed'>
        <Navbar />
            <left>
            </left>
            <center>
                <menuitem>INICIO.</menuitem>
                <menuitem>CONTACTO</menuitem>
                <menuitem>TRADUCCIONES</menuitem>
                <menuitem>NUESTRAS CLASES</menuitem>
                <menuitem>VIAJES DE ESTUDIO</menuitem>
                <menuitem>QUIENES SOMOS</menuitem>
            </center>
            <right>
                <menuitem>INICIO SESION</menuitem>
                <menuitem>REGISTRARSE</menuitem>
                <menuitem><CartWidget /></menuitem>
            </right>
        </Appbar>
        <ItemListContainer />
        </>
    );
}
export default Navbar;


