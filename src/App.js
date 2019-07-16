// Dependencias
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

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
    currentUser: null
  };
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  };
  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };
  render() {
    console.log(this.state);
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
