//import "./..//index.css";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/header/NavbarComp";
import { useNavigate } from "react-router-dom";
import { ImPlay2, ImPause } from "react-icons/im";
import { useState, useEffect } from "react";

function formatTime(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  let timeString = "";
  if (days > 0) {
    timeString += `${days}:`;
  }
  if (hours === 0 && days === 0 && minutes !== 0) {
    timeString += `00:`;
  }
  if (hours > 0 || (days > 0 && minutes !== 0)) {
    timeString += `${hours <= 9 ? "0" : ""}${hours}:`;
  }
  if (minutes === 0 && hours === 0) {
    timeString += `00:`;
  }
  if (minutes > 0 || hours > 0 || days > 0) {
    timeString += `${minutes <= 9 ? "0" : ""}${minutes}:`;
  }
  timeString += `${seconds <= 9 ? "0" : ""}${seconds}`;
  return timeString;
}

export default function AjoutMusique({ o }) {
  const [musicName, setMusicName] = useState("");
  const [Artist, setArtist] = useState("");
  const [Time, setTime] = useState("");
  const [Cover, setCover] = useState("asset/placeholder.png");
  const [error, setError] = useState("");
  const [music, setMusic] = useState("");
  const [file, setFile] = useState(null);
  const [musicfile, setMusicfile] = useState(null);
  const [result, setResult] = useState("");
  const [CasePlayStop, setSelectedIcon] = useState(1);

  const navigation = useNavigate();

  useEffect(() => {
    estConnecter();
    addImage();
  });

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
        musicFile: music,
      }),
      headers: {
        "Content-Type": "application/json charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Music ajouté");
          addMusicFile();
          addImage();
          setTime("1");
          setArtist("test");
          setMusicName("test");
          setCover("../asset/placeholder.png");
          setMusic("../asset/music/Enormous Penis.mp3");
        } else {
          console.log("Erreur pas facteur donc pas poste");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const addMusicFile = async () => {
    const formData = new FormData();
    formData.append("music", musicfile, musicfile.name);
    console.log(musicfile.name);
    await fetch("https://localhost:7246/MusicFile", {
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

  const handleMusicNameChange = (event) => {
    setMusicName(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleCoverChange = (event) => {
    setFile(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setCover(imageUrl);
    console.log(imageUrl);
  };

  const handleMusicFile = (event) => {
    //duration
    const audioFile = new Audio(URL.createObjectURL(event.target.files[0]));
    audioFile.addEventListener("loadedmetadata", () => {
      const duration = Math.floor(audioFile.duration);
      //const musicTime = formatTime(duration.toString());
      setTime(duration);
      console.log("Duration:", duration); // The duration of the audio file in second
    });
    if (musicfile == null) {
      setTime("00:00");
    }
    
    //Music
    setMusicfile(event.target.files[0]);
    const musicUrl = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0]);
    setMusic(musicUrl);
    console.log(musicUrl);
    //handleTimeChange();
  };

  function estConnecter() {
    if (sessionStorage.getItem("token") === null) {
      navigation("/");
    }
  }

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
      <div className="alert alert-success shadow-lg fixed mt-24" style={{display : result == "" ? "none" : "block"}}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{result}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center min-w-max w-full h-full pt-36 mb-12 shadow-lg font-Ubuntu gradiantPage bg-gradient-to-t from-cod-gray to-cod-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 grid-rows-2 sm:grid-auto-rows gap-8">
        <div className="rounded ml-10  h-fit w-96 bg-cod-gray-600   shadow-lg" style={{marginTop : result != "" ? "3rem" : "0rem" }}>
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
              required
              onChange={handleMusicNameChange}
            />
            <label className="label">
              <span className="label-text">Auteur</span>
            </label>
            <input
              type="text"
              placeholder="Auteur"
              required
              className="input input-bordered text-gray-200 bg-cod-gray-500 w-full max-w-xs"
              onChange={handleArtistChange}
            />

            <label className="label">
              <span className="label-text">Image de couverture</span>
            </label>
            <input
              type="file"
              security="true"
              required
              accept=".jpg, .png, .jpeg, .webp, .gif"
              placeholder="Image de couverture"
              className="file-input file-input-bordered w-full pb-14  text-gray-200 max-w-xs"
              onChange={handleCoverChange}
            />
            <label className="label">
              <span className="label-text">Musique</span>
            </label>
            <input
              type="file"
              security="true"
              required
              accept=".mp3, .wav, .ogg"
              placeholder="Image de couverture"
              className="file-input file-input-bordered w-full pb-14  text-gray-200 max-w-xs"
              onChange={handleMusicFile}
            />
            <button className="btn btn-primary left-100 mt-4">Ajouter</button>
          </form>
        </div>
        <div className="mobile-view" style={{marginTop : result != "" ? "3rem" : "0rem" }}>
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
                <button className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150">
                  {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {estConnecter()}
    </>
  );
}
