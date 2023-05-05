import React, { Fragment, useContext } from "react";
import "../components/body/body.css";
import Header from "../components/header/headerLogin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GoHome from "../components/elements/GoHome";
import { motion } from "framer-motion";

export function Connexion() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkUsername, setCheckUsername] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState(null);

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
    fetch(process.env.REACT_APP_API_URL + "/User", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => 
      { if (!response.ok)
        { throw new Error("Failed to fetch"); }
        return response.json()})
      .then((data) => setData(data))
      .catch((err) => setError(err.message));	
  };

  useEffect(() => {
    loadData();
  }, []);

  const tryLogin = async () => {
    await fetch(process.env.REACT_APP_API_URL + "/User/LogIn", {
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
        }
        else {
          response.text()
            .then((result) => {
              //console.log(result); // This will log the resolved value of the promise
              //setError(result);
              throw new Error(result);
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      })
      .then((data) => {
        if (data.token !== "") {
          sessionStorage.setItem("token", data.token);
          navigate("/");
        }
        else {
          throw new Error("Mauvaises informations");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    tryLogin();
  };

  async function checkIfUsernameTaken(input) {
    setUsername(input.target.value);
    setError(null);
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
    setError(null);
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
          <div style={{display : error == null ? 'none' : "block"}}>
            <div className="alert alert-error shadow-lg">
              <div>
                <svg className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            </div>
            <br></br>
          </div>
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
                  } form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border-2  border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
                  type="password"
                  placeholder="mot de passe"
                  onChange={(input) => setPassword(input.target.value)}
                  onInput={() => setError(null)}
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
  const [error, setError] = useState("");

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
    fetch(process.env.REACT_APP_API_URL + "/User", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error("Failed to fetch");
        } return response.json();})
      .then((data) => setData(data))
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  function creerCompte(event) {
    event.preventDefault();
    addUserDb();
    //console.log(data);
  }

  const addUserDb = async () => {
    fetch(process.env.REACT_APP_API_URL + "/User/SignUp", {
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
          //console.log("User added");
          navigation("/connexion");
        } else {
          response.text()
            .then((result) => {
              //console.log(result); // This will log the resolved value of the promise
              //setError(result);
              throw new Error(result);
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      })
      .catch((error) => {
        setError(error.message);
        //console.log(this.error);
      });
  };

  function checkValidityUsername(e) {
    setError("");
    for (const i of data) {
      if (i.name === e.target.value) {
        setCheckUsername("Ce nom est déjà pris");

        return;
      }
      setCheckUsername("");
    }
  }

  function checkValidityEmail(e) {
    setError("");
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
          <div style={{ display: error === "" ? "none" : "block" }}>
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
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
            <br></br>
          </div>
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
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  type="password"
                  placeholder="mot de passe"
                  onChange={(input) => setPassword(input.target.value)}
                  onInput={() => setError("")}
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
