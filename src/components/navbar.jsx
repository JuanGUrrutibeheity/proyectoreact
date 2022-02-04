import { Appbar } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./componentes/CartWidget";
function NavBar() {
    return (
    <div className="navbar">
        <button type="button" className="btn btn-primary">Primary</button>
    </div> >
    <Appbar position='fixed'>
    <Wrapper>
        <left>
            <Logo>ENGLISHCORNER.JPG</Logo>
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
        </Wrapper>
        </Appbar>
    );
}
export default Navbar;