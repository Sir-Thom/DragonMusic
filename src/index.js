import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navigation from './components/tailwindnavbar';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCubes } from '@fortawesome/fontawesome-free-solid';
import NavBarApp from "./components/NavbarApp"
import Body from './components/body'; 
//import ButtonAppBar from './components/NavbarComp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>

 <Navigation></Navigation>
  
  
  
  
  
 
</Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
