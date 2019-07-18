// Dependências
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
// Componentes
import CartIcon from "../cart/CartIcon";
import Cart from "../cart/Cart";
// CSS
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = props => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {props.currentUser ? (
          <div
            className="option"
            onClick={() => auth.signOut().then(() => window.location.reload())}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <p className={props.userName === null ? "d-none" : "username"}>
          {props.userName}
        </p>
        <CartIcon />
      </div>
      <Cart />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
