import React from "react";
import { Nav,Button, Navbar, NavItem,NavLink,Dropdown,DropdownToggle,Container} from 'react-bootstrap';
import logo from '../asset/logo.png';
import { FaHome, FaBars,FaTimes,  FaCompactDisc, FaHeart } from 'react-icons/fa';


export default function NavComp() {



  return (
    <Navbar  collapseOnSelect bg="dark"
    variant="dark"
    sticky="top"
      className=""
      expand="md"
     
    >
      <Container>
        <Navbar.Brand style={{fontWeight: "bold" }} href="#">
        <img 
                src={logo}
                className="d-inline-block align-left"
                alt="Logo"
              />
          Dragon Music
        </Navbar.Brand>

        <Navbar.Toggle
          style={{ background: "transparent" }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav as="ul"  className=" mb-auto">
            <NavItem>
              <NavLink href="#" className='text-white' active>
              <FaHome size={22} className="mr-2 " /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white">
              <FaCompactDisc size={22} className="mr-2" /> Library
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white">
              <FaHeart size={22} className="mr-2" /> Your Library
              </NavLink>
            </NavItem>
          </Nav>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}