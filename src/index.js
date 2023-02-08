import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar  from './components/Sidebar' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCubes } from '@fortawesome/fontawesome-free-solid';
import Body from './components/body'; 
import { Stack } from 'react-bootstrap';
import { NavbarApp } from './components/NavbarApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
  <Stack gap={2}>
  <NavbarApp/><Sidebar></Sidebar>
  <Body>
  </Body>
  </Stack>
</Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
