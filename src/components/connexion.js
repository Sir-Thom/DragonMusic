import React from "react";

const database = [
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
        return(
            <div>
            <label>Username</label><input type="text" onChange={(input) => this.setState({username: input.target.value})}></input>
            <label>Email</label><input type="email" onChange={(input) => this.setState({email: input.target.value})}></input>
            <label>Password</label><input type="text" onChange={(input) => this.setState({password: input.target.value})}></input>
            
            <button onClick={() => this.verifierConnexion()}>click</button>
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
            </div>
        )
    }
    
    verifierConnexion(){
        console.log(database);
        database.forEach(value => {
            if (this.state.password === value.password && (this.state.username === value.username || this.state.email === value.email))
            {
                alert('Alexis ca marchre');
            }
            else
            {
                alert('mauvais username et/ou mot de passe');
            }
        });
    }
}

export{Connexion}