import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/header/NavbarComp";
import Body from './components/body/body';
import { Connexion, Inscription } from './pages/connexionInscription';
import MusicBar from './components/elements/musicBar'
//route aka page we will be using
/*import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";*/

//import ButtonAppBar from './components/NavbarComp';
const root = ReactDOM.createRoot(document.getElementById('root'));
// pour savoir comment faire les routes https://www.w3schools.com/react/react_router.asp
root.render(
    <Inscription/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(console.log)
