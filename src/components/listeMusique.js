import React from 'react';
import './listeMusique.css';
class ListeDeMusique extends React.Component{
    constructor(props){
        super(props);
        this.state = {musique:[
            {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
            {nomMusique:"test2",duree:"69",auteur:"BABAJE"}
        ]}
    }

    render(){return(
        <h2>{this.state.musique.map((musique,index) =>(
            <p>{musique.nomMusique} de {musique.auteur}  durée: {musique.duree}</p>
    ))}
    </h2>
)}
}
export default ListeDeMusique;