import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarApp(){
    return(
        <Navbar variant="dark" bg='dark'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default NavbarApp;
