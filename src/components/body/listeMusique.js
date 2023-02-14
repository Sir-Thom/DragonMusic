import React, { Fragment ,useState} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";

export default function ListeDeMusique(){
    
    const music =  [{nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
    {nomMusique:"test2",duree:"69",auteur:"BABAJE"},
    {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
    {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
    {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
];

    return (
      <div className="grid grid-cols-4  grid-flow-row-dense grid-flow-col-dense gap-2 ">
        {music.map((musique, index) => (
          <div className=" grid-rows-4 w-75  bg-cod-gray-600   flex rounded overflow-hidden ">
            <img
              src="../../asset/goofy_dragon.png"
              width={20}
              alt={musique.nomMusique}
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{musique.nomMusique}</div>
              <p className="text-white text-base">{musique.auteur}</p>
              <p className="text-white text-base">{musique.duree}</p>
            </div>
            <div className="px-6 py-4">
              <BouttonJouerMusique></BouttonJouerMusique>
            </div>
          </div>
        ))}
      </div>
    );}


