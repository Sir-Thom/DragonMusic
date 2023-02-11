import React, {useState} from "react";
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
  );
 }


export {Inscription};



