import "./..//index.css";
import { Link } from "react-router-dom";
import Navigation from "../components/header/NavbarComp";
import daisyui from "daisyui";
import { useState } from "react";
import BouttonJouerMusique from "../components/elements/boutonJouerMusique";
export default function AjoutMusique() {
    const [musicName, setMusicName]= useState("");
    const [Artist, setArtist]= useState("");
    const [Time, setTime]= useState("");
  return (
    <>
      
    
      <div className="grid grid-cols-1  h-full pt-32 mb-12 shadow-lg  font-Ubuntu  pb-96   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
        <div className="rounded  overflow-hidden shadow-lg">
        <form className=" input-borderedl bg-transparent w-full max-w-xs ">
       
          <label className="label">
            <span className="label-text">Nom Musique</span>
          </label>
          <input
            type="text"
            placeholder="Nom Musique"
            className="input input-bordered text-gray-200  bg-cod-gray-500 w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Auteur</span>
          </label>
          <input
            type="text"
            placeholder="Auteur"
            className="input input-bordered text-gray-200 bg-cod-gray-500 w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Duree en seconde</span>
          </label>
          <input
            type="number"
            placeholder="Duree en seconde"
            className="input input-bordered text-gray-200 bg-cod-gray-500 w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Image de couverture</span>
          </label>
          <input
            type="file"
            placeholder="Image de couverture"
            className="file-input file-input-bordered w-full pb-14  text-gray-200 max-w-xs"
          />
        </form>
      </div>

      <br />
      
          <div  className="rounded  overflow-hidden shadow-lg">
            <img
             /* src={stock.image} */
              width="150px"
              height='150px'
             /* alt={stock.nomMusique} */
              className=" aspect-square  w-full"
            />
           
            <div className="font-Ubuntu   bg-cod-gray-400  px-6 py-6">

              <p className="font-Ubuntu  text-white font-bold text-xl mb-2">{musicName}</p>
              <div className="flex justify-between py-1 ">
              <p className=" justify-end font-Ubuntu text-white text-sm">{Artist} </p>
              <p className="font-Ubuntu text-white text-right text-md">{Time}</p>
              </div>
             
              <div className="flex justify-end mt-4 ">
             <BouttonJouerMusique  idMusique={1}  className=" mt-2 left-auto  items-end"   ></BouttonJouerMusique> */
            </div>
            </div>
          </div>
          </div>
    
    </>
  );
}
