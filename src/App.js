import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/Header/Header";

import "./App.css";
import "./pages/homepage/homepage.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
