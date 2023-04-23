import "./..//index.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "../components/header/NavbarComp";
import daisyui from "daisyui";
import { useState, useEffect } from "react";
import BouttonJouerMusique from "../components/elements/boutonJouerMusique";
export default function AjoutMusique({ o }) {
  const [musicName, setMusicName] = useState("");
  const [Artist, setArtist] = useState("");
  const [Time, setTime] = useState("");
  const [Cover, setCover] = useState("");
  const [MusicFile, setMusicFile] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (error !== "") {
      const timeout = setTimeout(() => {
        setError("");
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const addMusic = async () => {
    fetch("https://localhost:7246/Music", {
      method: "POST",
      body: JSON.stringify({
        NomMusique: musicName,
        Auteur: Artist,
        Duree: Time,
        Image: Cover,
      }),
      headers: {
        "Content-Type": "application/json charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Music ajouté");
          addImage();
          setTime("1");
          setArtist("test");
          setMusicName("test");
          setCover("../asset/Moai.png");
        } else {
          console.log("Erreur pas facteur donc pas poste");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const addImage = async () => {
    const formData = new FormData();
    formData.append("image", file, file.name);

    await fetch("https://localhost:7246/Image", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "*/*",
      },
    })
      .then((response) => {
        if (response.ok) {
          setResult("Téléversement réussi");
        } else setResult("Téléversement échoué, erreur: " + response.status);
      })
      .catch((err) => {
        setResult("Erreur: " + err.message);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    addMusic();
  };
  const handleMusicFileChange = (event) => {
    setMusicFile(event.target.value);
  };

  const handleMusicNameChange = (event) => {
    setMusicName(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleCoverChange = (event) => {
    setFile(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setCover(imageUrl);
    console.log(imageUrl);
  };

  return (
    <>
      <Navigation />
      <AnimatePresence>
        {error !== "" && (
          <motion.div
            className="fixed bottom-0 toast-bottom"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="alert alert-error">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-2 justify-center min-w-max  h-full pt-36 mb-12 shadow-lg  font-Ubuntu    gradiantPage bg-gradient-to-t  from-cod-gray to-cod-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 grid-rows-2 gap-8">
        <div className="rounded ml-4 h-fit w-96 bg-cod-gray-600  shadow-lg">
          <form
            onSubmit={onSubmitForm}
            className=" ml-4 pb-6 bg-transparent w-full max-w-xs "
          >
            <label className="label">
              <span className="label-text">Nom Musique</span>
            </label>
            <input
              type="text"
              placeholder="Nom Musique"
              className="input input-bordered text-gray-200  bg-cod-gray-500 w-full max-w-xs"
              onChange={handleMusicNameChange}
            />
            <label className="label">
              <span className="label-text">Auteur</span>
            </label>
            <input
              type="text"
              placeholder="Auteur"
              className="input input-bordered text-gray-200 bg-cod-gray-500 w-full max-w-xs"
              onChange={handleArtistChange}
            />
            <label className="label">
              <span className="label-text">Duree en seconde</span>
            </label>
            <input
              type="number"
              placeholder="Duree en seconde"
              className="input input-bordered text-gray-200 bg-cod-gray-500 w-full max-w-xs"
              onChange={handleTimeChange}
            />
            <label className="label">
              <span className="label-text">Image de couverture</span>
            </label>
            <input
              type="file"
              security="true"
              accept=".jpg, .png, .jpeg, .webp, .gif"
              placeholder="Image de couverture"
              className="file-input file-input-bordered w-full pb-14  text-gray-200 max-w-xs"
              onChange={handleCoverChange}
            />
            <label className="label">
              <span className="label-text">Chanson</span>
            </label>
            <input
              type="file"
              security="true"
              accept=".mp3,wav,ogg"
              placeholder="Chanson"
              className="file-input file-input-bordered w-full pb-14  text-gray-200 max-w-xs"
              onChange={handleMusicFileChange}
            />
            <button className=" flex justify-center btn btn-primary  left-100 mt-4">
              Ajouter la Musique
            </button>
          </form>
        </div>

        <div className="rounded  ml-10  h-fit w-72 bg-cod-gray-600   overflow-hidden shadow-lg">
          <img
            src={Cover}
            width={150}
            height={150}
            alt={musicName}
            className=" aspect-square  w-full h-full object-cover"
          />

          <div className="font-Ubuntu   bg-cod-gray-400  px-6 py-6">
            <p className="font-Ubuntu  text-white font-bold text-xl mb-2">
              {musicName}
            </p>
            <div className="flex justify-between py-1 ">
              <p className=" justify-end font-Ubuntu text-white text-sm">
                {Artist}
              </p>
              <p className="font-Ubuntu text-white text-right text-md">
                {Time}
              </p>
            </div>

            <div className="flex justify-end mt-4 ">
              <BouttonJouerMusique
                idMusique={1}
                className=" mt-2 left-auto  items-end"
              ></BouttonJouerMusique>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
