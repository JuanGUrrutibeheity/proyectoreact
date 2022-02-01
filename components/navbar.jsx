import { Appbar } from "@material-ui/core";
const NavBar = () => {
    return (
        <Appbar position='fixed'>
        <Wrapper>
        <left>
            <Logo>ENGLISHCORNER.JPG</Logo>
        </left>
        <center>
        </center>
        <right>
        <menuitem>INICIO.</menuitem>
        <menuitem>CONTACTO</menuitem>
        <menuitem>TRADUCCIONES</menuitem>
        <menuitem>NUESTRAS CLASES</menuitem>
        <menuitem>VIAJES DE ESTUDIO</menuitem>
        <menuitem>QUIENES SOMOS</menuitem>
        </right>
        </Wrapper>
        </Appbar>
    )
}