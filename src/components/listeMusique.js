import React, { Fragment } from 'react';
import './listeMusique.css';

class ListeDeMusique extends React.Component{
    constructor(props){
        super(props);
        this.state = {musique:[
            {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
            {nomMusique:"test2",duree:"69",auteur:"BABAJE"}
        ]};
    }

    render(){return(
        <Fragment>{this.state.musique.map((musique, index) =>(
            <span key={index}>{musique.nomMusique} de {musique.auteur}  durée: {musique.duree}<br></br></span>
    ))}</Fragment>
)}
}
export default ListeDeMusique;