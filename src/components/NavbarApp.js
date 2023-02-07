import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarApp(){
    return(
        <Navbar variant="dark" bg='dark'>
            <Container>
                <Navbar.Brand>
                    <img
                    src={require('./logo.png')}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="G"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">
                    Hello
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default NavbarApp;
