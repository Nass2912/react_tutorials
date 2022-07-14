import "./App.css";
import React, { Component } from "react";
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hellooooo",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "andrei" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;