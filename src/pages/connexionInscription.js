import React from "react";
import "../components/body/body.css";
import Header from "../components/header/headerLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
let database = require('../components/data/users.json')

export function Connexion() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function verifierConnexion(event) {
    event.preventDefault();
    for (const i of database) {
      if (
        password === i.password &&
        (username === i.username || email === i.email)
      ) {
        console.log("connection réussi");
        navigate("/");
        return;
      }
    }
    alert("Nom d'utilisateur et/ou mot de passe incorrect");
  }
  // Hooks must be used inside a functional component

  return (
    <section className="  h-screen font-sans gradiantPage antialiased min-h-full flex flex-col">
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
              className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              onChange={(input) => setUsername(input.target.value)}
            ></input>
             <span class="inline-flex text-sm text-red-700">Username not available!</span>
          </div>
          <div className="mb-6 ">
            <label className="text-white">e-mail</label>
            <input
              placeholder="Xxx_Joe_Blow69_xxX"
              type="email"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              onChange={(input) => setEmail(input.target.value)}
            ></input>
          </div>
          <div className="mb-6">
            <label className="text-white">Mot de passe</label>
            <input
              required
              className="invalid:border-red-600 form-control block w-full px-4 py-2 text-xl font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              type="password"
              placeholder="mot de passe"
              
              onChange={(input) => setPassword(input.target.value)}
            ></input>
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
  );
}

export function Inscription() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  function creerCompte(event) {
    event.preventDefault();

    for (const e of database) {
      if (e.username === username /*|| e.email === this.state.email*/) {
        alert("Nom d'utilisateur déjà utiliser");
        return; // est Utiliser
      }
      database.push({ username: username, email: email, password: password });
      alert("Compte créer avec succès");
      console.log(database);
      navigation("/");
      return;
    }
  }

  return (
    <section className="h-screen font-sans gradiantPage antialiased min-h-full flex flex-col">
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
            ></input>
          </div>

          <div className="mb-6">
            <label className="text-white">Courriel</label>
            <input
              required
              placeholder="Bob@exemple.com"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              type="email"
              onChange={(input) => setEmail(input.target.value)}
            ></input>
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
  );
}
