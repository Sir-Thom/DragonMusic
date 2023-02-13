import React, { Fragment } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/header/NavbarComp';
import Body from '../components/body/body';
import MusicBar from '../components/elements/musicBar';

export default class Accueil extends React.Component{
    render()
    {
        return (
        <Fragment>
        <Navigation></Navigation>
        <Body></Body>
        <MusicBar></MusicBar>
        </Fragment>);
    }
}