import React, { Component } from "react";
import HomePage from "./components/HomePage";

import "./sass/homepage.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
