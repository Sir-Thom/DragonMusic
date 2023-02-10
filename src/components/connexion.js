import React from "react";
import ReactDOM from 'react-dom/client';

const database = [
    {
      username: "joe",
      password: "1234"
    },
    {
      username: "human",
      password: "1234"
    },
    {
      username: "human1",
      password: "12345"
    }
  ];

class Connexion extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    render(){
        return(
            <div>
            <label>Username</label><input type="text" onChange={(input) => this.setState({username: input.target.value})}></input>
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
            if (this.state.password === value.password && this.state.username == value.username)
            {
                alert('Alexis ca marchre');
            }
        });
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
 <Connexion/>
</Fragment>
);