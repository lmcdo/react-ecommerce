import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";

import "./App.css";
import "./pages/homepage/homepage.scss";

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
