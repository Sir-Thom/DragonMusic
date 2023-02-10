import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from './components/NavbarComp';
import Body from './components/body'; 
//import ButtonAppBar from './components/NavbarComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
 <Navigation></Navigation>
  <Body></Body>
</Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
