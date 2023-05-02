import React, { Fragment, useContext } from "react";
import "../components/body/body.css";
import Header from "../components/header/headerLogin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GoHome from "../components/elements/GoHome";
import { motion } from "framer-motion";
const database = require("../components/data/users.json");

export function Connexion() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkUsername, setCheckUsername] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  useEffect(() => {
    estConnecter();
  }, []);

  const slideToScreen = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0",
      opacity: 1,

      transition: {
        duration: 0.35,
        type: "tween",
        anticipate: [0.17, 0.67, 0.83, 0.97],
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
    },
  };
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const loadData = async () => {
    fetch("https://localhost:7246/User", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const tryLogin = async () => {
    await fetch("https://localhost:7246/User/LogIn", {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Mauvaises informations");
          return { token: "" };
        }
      })
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    tryLogin();
  };

  async function checkIfUsernameTaken(input) {
    setUsername(input.target.value);

    for (const i of data) {
      if (input.target.value === i.name) {
        setCheckUsername("");
        return;
      } else if (input.target.value === "") {
        setCheckUsername("");
      } else {
        setCheckUsername("Ce nom est invalide.");
      }
    }
  }

  async function checkIfEmailTaken(input) {
    setEmail(input.target.value);

    for (const i of data) {
      if (input.target.value === i.email) {
        setCheckEmail("");
        return;
      } else if (input.target.value === "") {
        setCheckEmail("");
        return;
      } else {
        setCheckEmail("Ce courriel est invalide.");
      }
    }
  }

  function estConnecter() {
    if (sessionStorage.getItem("token") !== null) {
      navigate("/");
    }
  }

  return (
    <Fragment>
      <section className="h-screen w-screen  bg-gradient-to-t  from-cod-gray to-cod-gray-800 font-sans gradiantPage antialiased min-h-full flex flex-col">
        <GoHome></GoHome>
        <motion.div
          variants={slideToScreen}
          initial="hidden"
          animate="visible"
          exit={"exit"}
        >
          <Header
            heading="Connectez-vous à votre compte"
            paragraph="Vous n'avez pas encore de compte? "
            linkName="S'inscrire"
            linkUrl="/inscription"
          />

          <div className="  flex  flex-col items-center justify-center ">
            <div></div>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-6 ">
                <label className="text-white">nom d'utilisateur</label>
                <input
                  placeholder="votre nom d'utilisateur"
                  type="name"
                  className={`${
                    checkUsername !== "" ? "border-red-600" : "border-gray-300"
                  } border-2 form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding  border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
                  onChange={(input) => checkIfUsernameTaken(input)}
                ></input>
                <span
                  className={`inline-flex text-sm ${
                    checkUsername !== "" ? "  text-red-600 " : "hidden"
                  }`}
                >
                  {checkUsername}
                </span>
              </div>
              <div className="mb-6 ">
                <label className="text-white">Couriel</label>
                <input
                  placeholder="monEmail@gmail.com"
                  type="email"
                  className={`${
                    checkEmail !== "" ? "border-red-600" : "border-gray-300"
                  }  border-2 form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding  border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
                  onChange={(input) => checkIfEmailTaken(input)}
                ></input>
                <span
                  className={`inline-flex text-sm ${
                    checkEmail !== "" ? "text-red-600 " : "hidden"
                  }`}
                >
                  {checkEmail}
                </span>
              </div>
              <div className="mb-6">
                <label className="text-white">Mot de passe</label>
                <input
                  required
                  className={`${
                    checkPassword !== "" ? "border-red-600" : "border-gray-300"
                  } form-control block w-full px-4 py-2 text-xl font-normal  bg-white bg-clip-padding border-2  border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
                  type="password"
                  placeholder="mot de passe"
                  onChange={(input) => setPassword(input.target.value)}
                ></input>
                <span
                  className={`inline-flex text-sm ${
                    checkPassword !== "" ? "text-red-600 " : "hidden"
                  }`}
                >
                  {checkPassword}
                </span>
              </div>

              <button
                type="submit"
                className="inline-block ease-in-out active:scale-90  border-2 border-transparent border-spacing-4 hover:border-violet-900 px-7 py-3 bg-violet-600 text-white text-lg font-bold leading-snug  rounded-full shadow-md  hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150  w-full"
              >
                Se Connecter
              </button>
            </form>
            <div></div>
          </div>
        </motion.div>
      </section>
    </Fragment>
  );
}

export function Inscription() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkUsername, setCheckUsername] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const navigation = useNavigate();
  const slideToScreen = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.35,
        type: "tween",
        anticipate: [0.17, 0.67, 0.83, 0.97],
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
    },
  };

  useEffect(() => {
    estConnecter();
  }, []);

  const [data, setData] = useState([]);

  const loadData = async () => {
    fetch("https://localhost:7246/User", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  function creerCompte(event) {
    event.preventDefault();
    addUserDb();

    for (const i of data) {
      if (i.username === username || i.email === email) {
        alert("Nom d'utilisateur ou e-mail déjà utiliser");
        return; // est Utiliser
      }
    }
    database.push({
      username: username,
      email: email,
      password: password,
      isLogged: true,
    });
    alert("Compte créer avec succès");
    console.log(data);
    navigation("/connexion");
    return;
  }

  const addUserDb = async () => {
    fetch("https://localhost:7246/User/SignUp", {
      method: "POST",
      body: JSON.stringify({
        Name: username,
        Email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("User added");
        } else {
          console.log("Le cast POST n'a pas fonctionné");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  function checkValidityUsername(e) {
    for (const i of data) {
      if (i.username === e.target.value) {
        setCheckUsername("Ce nom est déjà pris");

        return;
      }
      setCheckUsername("");
    }
  }

  function checkValidityEmail(e) {
    for (const i of data) {
      if (i.email === e.target.value) {
        setCheckEmail("Cette e-mail est déjà pris");
        return;
      }
      setCheckEmail("");
    }
  }

  function estConnecter() {
    if (sessionStorage.getItem("token") !== null) {
      navigation("/");
    }
  }

  return (
    <Fragment>
      <section className="h-screen w-screen  bg-gradient-to-t  from-cod-gray to-cod-gray-800 font-sans gradiantPage antialiased min-h-full flex flex-col">
        <GoHome></GoHome>
        <motion.div
          variants={slideToScreen}
          initial="hidden"
          animate="visible"
          exit={"exit"}
        >
          <Header
            heading="Créez-vous un compte"
            paragraph="Vous avez déja un compte? "
            linkName="Se connecter"
            linkUrl="/connexion"
          />
          <div className="  flex  flex-col items-center justify-center ">
            <form onSubmit={(e) => creerCompte(e)}>
              <div className="mb-6">
                <label className="text-white">nom d'utilisateur</label>
                <input
                  required
                  placeholder="Alexis Thibodeau"
                  type="name"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  onChange={(input) => setUsername(input.target.value)}
                  onInput={(e) => checkValidityUsername(e)}
                ></input>
                <span
                  className={`inline-flex text-sm ${
                    checkUsername !== "" ? "text-red-600" : "hidden"
                  }`}
                >
                  {checkUsername}
                </span>
              </div>

              <div className="mb-6">
                <label className="text-white">Courriel</label>
                <input
                  required
                  placeholder="Bob@exemple.com"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  type="email"
                  onChange={(input) => setEmail(input.target.value)}
                  onInput={(e) => checkValidityEmail(e)}
                ></input>
                <span
                  className={`inline-flex text-sm ${
                    checkEmail !== "" ? "text-red-600" : "hidden"
                  }`}
                >
                  {checkEmail}
                </span>
              </div>

              <div className="mb-6">
                <label className="text-white">Mot de passe</label>
                <input
                  required
                  className="form-control block w-full px-4 py-2 text-xl font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  type="password"
                  placeholder="mot de passe"
                  onChange={(input) => setPassword(input.target.value)}
                ></input>
              </div>

              <button
                type="submit"
                className="inline-block my-8 px-7 py-3 bg-violet-600 text-white text-lg font-bold leading-snug  rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </Fragment>
  );
}
