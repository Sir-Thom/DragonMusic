import React, {useState} from "react";
import GoofyDragon from "../asset/goofy_dragon.png"
import "../components/body/body.css"


const Inscription = ()=>{
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });


  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    // Envoyer les données du formulaire au serveur ici
    alert("Votre compte à été créé avec le Nom d'utilisateur:" + formData.username +  ", l'email: " + formData.email + " et le mot de passe: " + formData.password );
    event.preventDefault();
  };
  return (
    <section class="h-screen">
    <div class="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
   
    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
    <img
      src={GoofyDragon}
      className="w-full"
      alt="GoofyDragon"
    />
  </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom d'utilisateur: </label>
        <input
          className=""
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>email: </label>
        <input
          className=""
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>mot de passe: </label>
        <input
          className=""
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Créer un compte</button>
    </form>
    </div>
    </div>
    </section>
  );
 }


export {Inscription};



