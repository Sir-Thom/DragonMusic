import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Header from "../components/header/headerLogin"
let database = [
    {
      username: "joe",
      email: "joe@joe.com",
      password: "1234"
    },
    {
      username: "humain",
      email: "humain",
      password: "1234"
    },
    {
      username: "human1",
      email: "human1",
      password: "12345"
    }
  ];
  

export default function Connexion(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    function verifierConnexion(event){
      event.preventDefault();
      for (const i of database) {
        if (password === i.password && (username === i.username || email === i.email)) {
          console.log("connection réussi");
          
          navigate("/");
          return;
        }
      }
      alert("Nom d'utilisateur et/ou mot de passe incorrect");
    };
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
   <div>
   </div>
  

     
 
   <form onSubmit={(event) => verifierConnexion(event)}>
         <div className="mb-6 ">
           <label className="text-white">nom d'utilisateur</label>
           <input
             placeholder="Xxx_Joe_Blow69_xxX"
             type="name"
             className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
             onChange={(input) => setUsername(input.target.value)}
             
           ></input>
         </div>
         <div className="mb-6">
           <label className="text-white">Courriel</label>
           <input
             placeholder="Joe@exemple.com"
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
           className="inline-block px-7 py-3 bg-violet-600 text-white text-lg font-bold leading-snug  rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out w-full"
           onClick={(e) => this.verifierConnexion(e)}
         >
           Se Connecter
         </button>
       </form>          <div>
   </div>
 </div>
</section>

);

}

