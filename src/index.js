import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/header/NavbarComp";
import Body from "./components/body/body"



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
