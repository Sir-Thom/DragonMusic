import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar  from './components/Sidebar' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/fontawesome-free-solid';
import Body from './components/body'; 
import { NavbarApp } from './components/NavbarApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div variant="dark">
  
  <div><NavbarApp/><Sidebar></Sidebar></div>
  
  <Body></Body>

 {/* il y a plusieur méthode pour utiliser fontawesome 1: avec fontAwesomeIcon icon= */}
 <FontAwesomeIcon icon=" fa fa-cubes"></FontAwesomeIcon> methode 1<br></br>
  {/*1.2 ont peu aussi import une icon en particulier  */}
  <FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>methode 1.2
   {/* 2: ont peu utiliser les className */}
  <div><i className="fa fa-cubes ">methode 2</i></div>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
