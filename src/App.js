// Dependencias
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";

// Componentes
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import Login from "./pages/signin-up/Login";

// CSS
import "./App.css";
import "./pages/homepage/homepage.scss";

class App extends Component {
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
    console.log(this.props);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(App);
