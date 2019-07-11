import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";

import "./App.css";
import "./pages/homepage/homepage.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
