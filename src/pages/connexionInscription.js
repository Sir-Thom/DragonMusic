import React from "react";
import logo from "../asset/logo.svg"
import "../components/body/body.css"
let database = [
    {
      username: "joe",
      email: "joe",
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

class Connexion extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    render(){
        return (
          <section className="  h-screen font-sans gradiantPage antialiased min-h-full flex flex-col">
            <div className="my-auto  mb-16 h-6 w-auto text-slate-900">
              <img className="h-96 w-50 mx-auto" src={logo}></img>
            </div>

            <div className="  flex flex-1 flex-col items-center justify-center pt-12 pb-16">
              <h1 className=" sr-only"></h1>

              <form>
                <div className="mb-6 ">
                  <label className="text-white">Username</label>
                  <input
                    placeholder="Xxx_Joe_Blow69_xxX"
                    type="name"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                    onChange={(input) =>
                      this.setState({ username: input.target.value })
                    }
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="text-white">Email</label>
                  <input
                    placeholder="Joe@exemple.com"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                    type="email"
                    onChange={(input) =>
                      this.setState({ email: input.target.value })
                    }
                  ></input>
                </div>

                <div className="mb-6">
                  <label className="text-white">Password</label>
                  <input
                    required
                    className="form-control block w-full px-4 py-2 text-xl font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                    type="password"
                    placeholder="mot de passe"
                    onChange={(input) =>
                      this.setState({ password: input.target.value })
                    }
                  ></input>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-violet-600 text-white font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  onClick={(e) => this.verifierConnexion(e)}
                >
                  Se Connecter
                </button>
              </form>
            </div>
          </section>
        );
    }
    
    verifierConnexion(event){
        event.preventDefault();
        for (const i of database) {
          if (this.state.password === i.password && (this.state.username === i.username || this.state.email === i.email))
            {
                alert('Bienvenu sur le site');
                return;
            }
        }
        alert("Nom d'utilisateur et/ou mot de pass incorrect");
    } 
}

class Inscription extends React.Component
{
    constructor(props){
      super(props)
      this.state = {
          username: "",
          email: "",
          password: ""
      }
    }

    render(){
      return (
        <section className="  h-screen font-sans gradiantPage antialiased min-h-full flex flex-col">
            <div className="my-auto  mb-16 h-6 w-auto text-slate-900">
              <img className="h-96 w-50 mx-auto" src={logo}></img>
            </div>

            <div className="  flex flex-1 flex-col items-center justify-center pt-12 pb-16">
              <h1 className=" sr-only"></h1>
            <form onSubmit={(e) => this.creerCompte(e) }>
              <div className="mb-6">
                <label className="text-white">Username</label>
                <input
                  required
                  placeholder="VickyVickyVicky"
                  type="name"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  onChange={(input) =>
                    this.setState({ username: input.target.value })
                  }
                ></input>
                </div>

                <div className="mb-6">
                <label className="text-white">Email</label>
                <input
                  required
                  placeholder="Bob@exemple.com"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  type="email"
                  onChange={(input) => this.setState({ email: input.target.value })}
                ></input>
                </div>

                <div className="mb-6">
                <label className="text-white">Password</label>
                <input
                  required
                  className="form-control block w-full px-4 py-2 text-xl font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  type="password"
                  placeholder="mot de passe"
                  onChange={(input) =>
                    this.setState({ password: input.target.value })
                  }
                ></input>
                </div>

                <button type="submit"
                className="inline-block px-7 py-3 bg-violet-600 text-white font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                  S'inscire
                </button>
            </form>
          </div>
        </section>
      );
    }

    creerCompte(event)
    {
      event.preventDefault();

      for (const e of database) {
        if(e.username === this.state.username /*|| e.email === this.state.email*/)
        {
          alert("Nom d'utilisateur déjà utiliser")
          return; // est Utiliser
        }
      }

      database.push({username: this.state.username, email: this.state.email, password: this.state.password});
      alert("Compter créer avec succès");
      console.log(database);
    }
}

export{Inscription}
export{Connexion}