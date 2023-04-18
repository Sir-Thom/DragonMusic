import React, { Fragment } from 'react';
import '../index.css';
//import Navigation from '../components/header/NavbarComp';
import Body from '../components/body/body';
import MusicBar from '../components/elements/musicBar';

export default class Accueil extends React.Component{
    render()
    {
        return (
          <Fragment >
            <Body className="mb-8">
            
            </Body>
         <MusicBar></MusicBar>
          </Fragment>
        );
    }
}