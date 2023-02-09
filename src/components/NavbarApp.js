import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../asset/logo.png';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBarApp.css';

function NavbarApp(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex:'1024'
        }}>

      <Container>
        <Navbar.Brand href="#home">
              <img 
                src={logo}
                className="d-inline-block align-center"
                width={"50px" }
                height={"50px" }

                alt="Logo"
              />
              Dragon Music
            </Navbar.Brand>
        <Navbar.Brand href="#home">Connexion</Navbar.Brand>
        <Navbar.Brand href="#home">Inscription</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deconnexion">Déconnexion</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    )
}
export default NavbarApp ;
