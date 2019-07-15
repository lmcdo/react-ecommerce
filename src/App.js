// Dependencias
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase";

// Componentes
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import Login from "./pages/signin-up/Login";

// CSS
import "./App.css";
import "./pages/homepage/homepage.scss";

class App extends Component {
  state = {
    currentUser: null,
    profilePhoto: null,
    userName: null
  };
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
        profilePhoto: user.photoURL,
        userName: user.displayName
      });
      console.log(user);
    });
  };
  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };
  render() {
    return (
      <BrowserRouter>
        <Header
          profilePhoto={this.state.profilePhoto}
          userName={this.state.userName}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
