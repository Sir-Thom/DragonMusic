import React, { useState } from 'react';import './Sidebar.css'
import { Nav,Button, Navbar, NavItem,NavLink,Dropdown,DropdownToggle} from 'react-bootstrap';
import { FaHome, FaBars,FaTimes,  FaCompactDisc, FaHeart } from 'react-icons/fa';
import logo from '../asset/logo.png';
import { NavbarApp } from './NavbarApp';



function Sidebar(){
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
<Nav>
        
          </Nav>
      {showSidebar && (
        <div  className="sidebar d-flex text-dark flex-column flex-shrink-0 flex-fill p-3">
          
          <Nav variant="dark"  className="d-flex align-items-center mb-3 mb-md-0  text-white text-decoration-none">
            <Navbar.Brand href="#home">
              <img 
                src={logo}
                className="d-inline-block align-center"
                alt="Logo"
              />
              Dragon Music
            </Navbar.Brand>
          </Nav>
          <div className='p-3'/>
          <Nav as="ul"  className="flex-column mb-auto">
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
        </div>
      )}
    </>
  );
}



/*
function Sidebar(){
  return (
    <div style={{ width: 250 }} className="sidebar d-flex text-dark flex-column flex-shrink-0 flex-fill p-3">
      <Nav variant="dark"  className="d-flex align-items-center mb-3 mb-md-0  text-white text-decoration-none">
        <Navbar.Brand href="#home">
          <img 
            src={logo}
            className="d-inline-block align-center"
            alt="Logo"
          />
          Dragon Music
        </Navbar.Brand>
      </Nav>
      <div className='p-3'/>
      <Nav as="ul"  className="flex-column mb-auto">
        <NavItem>
          <NavLink href="#" className='text-white' active>
          <FaHome size={22} className="mr-2 " />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-white">
          <FaCompactDisc size={22} className="mr-2" />
            Library
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-white">
          <FaHeart size={22} className="mr-2" />
            Your Library
          </NavLink>
        </NavItem>
      </Nav>       
    </div>
  );
};*/
export default Sidebar;
//veille version
/*function NavbarApp(){
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
}*/

