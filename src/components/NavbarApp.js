import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {Form, Button } from 'react-bootstrap';
import './NavBarApp.css';

function NavbarApp(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='d-flex text-dark flex-column flex-shrink-0 flex-fill p-3 a'>
      <Container>
        <Navbar.Brand href="#home">Connexion</Navbar.Brand>
        <Navbar.Brand href="#home">Inscription</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deconnexion">Déconnexion</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Nav>
            <Form className="d-flex mr-auto" expand="lg">
            <Form.Control
              type="search"
              placeholder="Recherche"
              className="me-2"
              aria-label="Recherche"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
          </Nav>
      </Container>
    </Navbar>
    )
}
export {NavbarApp};
