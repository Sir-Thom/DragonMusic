import React, { Fragment } from "react";
import "../components/body/body.css";
import Header from "../components/header/headerLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoHome from "../components/elements/GoHome";

const database = require('../components/data/users.json');

export function Connexion() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkUsername, setCheckUsername] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const navigate = useNavigate();

  function verifierConnexion(event) {
    event.preventDefault();
    for (const i of database) {
      if (
        password === i.password &&
        (username === i.username || email === i.email)
      ) {
        database.forEach(i => {
          if(i.username === username){
            i.isLogged = true;
          }
        });
        console.log("Username not available!");
        navigate("/");
        return;
      }
    }
    //alert("Nom d'utilisateur et/ou mot de passe incorrect");
  }

  async function checkIfUsernameTaken(input)
  {
    setUsername(input.target.value);

    for (const i of database) {
      if(input.target.value === i.username){
        setCheckUsername("");
        return;
      }
      else if (input.target.value ===""){
        setCheckUsername("");
      }
      else{
        setCheckUsername("Ce nom est invalide.");
      }
      
    }
  }

  async function checkIfEmailTaken(input)
  {
    setEmail(input.target.value);

    for (const i of database) {
      if(input.target.value === i.email){
        setCheckEmail("");
        return;
      }
      else if (input.target.value === ""){
        setCheckEmail("");
        return;
      }
      else{
        setCheckEmail("Ce courriel est invalide.");
      }
      
    }
  }

  async function checkIfPassword(input)
  {
    setPassword(input.target.value);

    for (const i of database) {
      if(input.target.value === i.password){
        setCheckPassword("");
        return;
      }
      else if (input.target.value ===""){
        setCheckPassword("");
      }
      else{
        setCheckPassword("Ce mot de passe est invalide.");
      }
      
    }
  }
  // Hooks must be used inside a functional component

  function estConnecter(){
    for (const i of database) {
      if(i.isLogged === true){
        return navigate("/");
      }
    }
  }

  return (
    <Fragment>
      {estConnecter()}
    <section className="h-screen font-sans gradiantPage antialiased min-h-full flex flex-col">
      <GoHome ></GoHome>
      <Header
        heading="Connectez-vous à votre compte"
        paragraph="Vous n'avez pas encore de compte? "
        linkName="S'inscrire"
        linkUrl="/inscription"
      />
      <div className="  flex  flex-col items-center justify-center ">
        <div></div>
        <form onSubmit={(event) => verifierConnexion(event)}>
          <div className="mb-6 ">
            <label className="text-white">nom d'utilisateur</label>
            <input
              placeholder="Xxx_Joe_Blow69_xxX"
              type="name"
              className={`${checkUsername !== "" ? "border-red-600" : "border-gray-300"} border-2 form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding  border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
              onChange={(input) => checkIfUsernameTaken(input)}
            ></input>
             <span className={`inline-flex text-sm ${checkUsername !== "" ? "  text-red-600 " : "hidden"}`}>{checkUsername}</span>
          </div>
          <div className="mb-6 ">
            <label className="text-white">Couriel</label>
            <input
              placeholder="Xxx_Joe_Blow69_xxX"
              type="email"
              className={`${checkEmail !== "" ? "border-red-600" : "border-gray-300"}  border-2 form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding  border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
              onChange={(input) => checkIfEmailTaken(input)}
            ></input>
            <span className={`inline-flex text-sm ${ checkEmail!== "" ? "text-red-600 " : "hidden"}`}>{checkEmail}</span>

          </div>
          <div className="mb-6">
            <label className="text-white">Mot de passe</label>
            <input
              required
              className={`${checkPassword !== "" ? "border-red-600" : "border-gray-300"} form-control block w-full px-4 py-2 text-xl font-normal  bg-white bg-clip-padding border-2  border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none`}
              type="password"
              placeholder="mot de passe"
              
              onChange={(input) => checkIfPassword(input)}
            ></input>
            <span className={`inline-flex text-sm ${checkPassword !== "" ? "text-red-600 " : "hidden"}`}>{checkPassword}</span>

          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-violet-600 text-white text-lg font-bold leading-snug  rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            Se Connecter
          </button>
        </form>{" "}
        <div></div>
      </div>
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

  function creerCompte(event) {
    event.preventDefault();
    
    for (const i of database) {
      if (i.username === username || i.email === email) {
        alert("Nom d'utilisateur ou e-mail déjà utiliser");
        return; // est Utiliser
      }
    }
    database.push({ username: username, email: email, password: password, isLogged: true});
    alert("Compte créer avec succès");
    console.log(database);
    navigation("/");
    return;
  }

  function checkValidityUsername(e)
  {
    for (const i of database) {
      if(i.username === e.target.value){
        setCheckUsername("Ce nom est déjà pris");
        return;
      }
      setCheckUsername("");
    }
  }

  function checkValidityEmail(e)
  {
    for (const i of database) {
      if(i.email === e.target.value){
        setCheckEmail("Cette e-mail est déjà pris");
        return;
      }
      setCheckEmail("");
    }
  }

  function estConnecter(){
    for (const i of database) {
      if(i.isLogged){
        return navigation("/");
      }
    }
  }

  return (
    <Fragment>
      {estConnecter()}
    <section className="h-screen font-sans gradiantPage antialiased min-h-full flex flex-col">
      <GoHome ></GoHome>
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
              placeholder="Vicky"
              type="name"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              onChange={(input) => setUsername(input.target.value)}
              onInput={(e) => checkValidityUsername(e)}
            ></input>
            <span className={`inline-flex text-sm ${checkUsername !== "" ? "text-red-600" : "hidden"}`}>{checkUsername}</span>
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
            <span className={`inline-flex text-sm ${checkEmail !== "" ? "text-red-600" : "hidden"}`}>{checkEmail}</span>
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
    </section>
    </Fragment>
  );
}
