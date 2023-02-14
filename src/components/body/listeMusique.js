import React, { Fragment ,useState} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
import goofy_dragon from "../../asset/goofy_dragon.png";

export default function ListeDeMusique(){
    
    const music =  [{nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
    {nomMusique:"test2",duree:"69",auteur:"BABAJE"},
    {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
    {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
    {nomMusique:"testation",duree:"35",auteur:"Jean-Marc"},
];

    return (
      <div className="grid grid-cols-3 grid-rows-2  gap-2  ">
        {music.map((musique, index) => (
          <div key={index} className="   bg-cod-gray-600   flex rounded overflow-hidden ">
            <img
              src={goofy_dragon}//"../../asset/goofy_dragon.png"
              width={150}
              alt={musique.nomMusique}
              className=" min-w-0 flex flex-shrink-0"
            />
            <div className="px-6 py-4">
              <div className=" flex-shrink-0font-bold text-xl mb-2">{musique.nomMusique}</div>
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


