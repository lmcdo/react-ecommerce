// Dependencias
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
// Redux
import { setCurrentUser } from "./redux/user/userActions";

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
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  };
  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Login />
            }
          />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
// mapDispatchToProps poderia ser implementado com Arrow Functions do ES6, mas desse jeito fica mais coêso.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: function(user) {
    dispatch(setCurrentUser(user));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
