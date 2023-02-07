import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavbarApp  from './components/NavbarApp' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube } from '@fortawesome/fontawesome-free-solid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
  <NavbarApp></NavbarApp>
  <h3>Hello Alexis</h3>
  <FontAwesomeIcon icon=" fa fa-shield"></FontAwesomeIcon>
  <div><i className="fa fa-shield "></i></div>

  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
