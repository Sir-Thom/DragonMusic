import React, { useState, useCallback } from "react";
import "./listeMusique.css";
import BouttonJouerMusique from "../elements/boutonJouerMusique";

export default function ListeDeMusique(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  //const [data,setData] = useState("");
  const date = new Date(0);
date.setSeconds(currentTime);
const timeString = date.toISOString().substr(14, 5);
  //console.log(props.musicAJouer);
  const tabRow = useCallback(() => {
		if (props.musics instanceof Array) {
			return (
      <div className="grid grid-cols-1  h-full pt-32 mb-12 shadow-lg  font-Ubuntu  pb-96   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.musics.map((stock, index) => {
         //se chose là recup l'id de la musique
         console.log(props.data[index].id);
          return (
          <div key={index} id={index+1} className="rounded  overflow-hidden shadow-lg">
            <img
              src={stock.image}
              width="150px"
              height='150px'
              alt={stock.nomMusique}
              className=" aspect-square  w-full"
            />
           
            <div className="font-Ubuntu   bg-cod-gray-400  px-6 py-6">

                <div className="font-Ubuntu   bg-cod-gray-400  px-6 py-6">
                  <p className="font-Ubuntu  text-white font-bold text-xl mb-2">
                    {stock.nomMusique}
                  </p>
                  <div className="flex justify-between py-1 ">
                    <p className=" justify-end font-Ubuntu text-white text-sm">
                      {stock.auteur}
                    </p>
                    <p className="font-Ubuntu text-white text-right text-md">
                      {timeString}
                    </p>
                  </div>

                  <div className="flex justify-end mt-4 ">
                    <BouttonJouerMusique
                      className=" mt-2 left-auto  items-end"
                      idMusique={index}
                    ></BouttonJouerMusique>
                  </div>
                </div>
              </div>
             
              <div className="flex justify-end mt-4 ">
              <BouttonJouerMusique  className=" mt-2 left-auto  items-end" idMusique={index+1} setData={props.musicAJouer}  ></BouttonJouerMusique>
            </div>
            </div>
          )
		  })}
    </div>
    )
  }
	}, [props.data]);
    return (
      <>{tabRow()}</>
    );
  }

