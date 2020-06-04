import React from 'react'
import { 
    Navbar,
    Nav
} from 'react-bootstrap';
import './MenuWeb.css';

class MenuWeb extends React.Component {

    render() {
        return (
            <>
            <Nav className="justify-content-end menu-info" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" className="menuLink">GIAN CARLOS SOLIS LINARES</Nav.Link>
                    <Nav.Link href="/home" className="menuLink2">PROGRAMADOR WEB FREELANCE</Nav.Link>
                </Nav.Item>
            </Nav>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="subMenu">
                <Navbar.Brand href="#home">INICIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">¿QUIEN SOY?</Nav.Link>
                    <Nav.Link href="#pricing">PROYECTOS</Nav.Link>
                    <Nav.Link href="#deets">CONTACTO</Nav.Link>
                    {/*
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    */}
                    </Nav>
                    {/*
                    <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        Sobre Mi
                    </Nav.Link>
                    </Nav>
                    */}
                </Navbar.Collapse>
            </Navbar>
            </>
        );
    }

}

export default MenuWeb;