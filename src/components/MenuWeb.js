import React from 'react'
import { 
    Navbar,
    Nav
} from 'react-bootstrap';

class MenuWeb extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Proyects</Nav.Link>
                    <Nav.Link href="#pricing">Ekills</Nav.Link>
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
                    <Nav>
                    <Nav.Link href="#deets">Contacto</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Sobre Mi
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default MenuWeb;