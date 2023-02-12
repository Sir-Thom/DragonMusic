import React from "react";

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
          <div className="">
            <label className="">Username</label>
            <input
              type="text"
              onChange={(input) =>
                this.setState({ username: input.target.value })
              }
            ></input>
            <label className="">Email</label>
            <input
              type="email"
              onChange={(input) => this.setState({ email: input.target.value })}
            ></input>
            <label className="">Password</label>
            <input
              className="" 
              type="text"
              onChange={(input) =>
                this.setState({ password: input.target.value })
              }
            ></input>

            <button className="" onClick={() => this.verifierConnexion()}>
              click
            </button>
          </div>
        );
    }
    
    verifierConnexion(){
        for (const i of database) {
          if (this.state.password === i.password && (this.state.username === i.username || this.state.email === i.email))
            {
                alert('Votre compte a été créer');
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
        <form onSubmit={(e) => this.creerCompte(e) }>
        <div className="">
          <label className="">Username</label>
          <input
            type="text" required
            onChange={(input) =>
              this.setState({ username: input.target.value })
            }
          ></input>
          <label className="">Email</label>
          <input
            type="email" required
            onChange={(input) => this.setState({ email: input.target.value })}
          ></input>
          <label className="">Password</label>
          <input
            className="" required
            type="text"
            onChange={(input) =>
              this.setState({ password: input.target.value })
            }
          ></input>

          <button type="submit" >
            click
          </button>
        </div>
        </form>
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
      console.log(database);
    }
}

export{Inscription}
export{Connexion}