import "./App.css";
import React, { Component } from "react";
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: "ce1",
          name: "kratos"
        },
        {
          id: "ce2",
          name: "Max"
        },
        {
          id: "ce3",
          name: "Hercules"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    )
  }
}

export default App;
