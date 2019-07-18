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

const Header = ({ currentUser, hidden, userName }) => {
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
        {currentUser ? (
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
        <p className={userName === null ? "d-none" : "username"}>{userName}</p>

        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

// Na linha abaixo, estou desestrutudando currentUser de dentro do user, e hidden de dentro de cart
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  /* 
  currentUser: currentUser,
  hidden: hidden
  */
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
