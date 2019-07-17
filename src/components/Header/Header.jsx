// Dependências
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
// CSS
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = props => {
  console.log("Props do Header", props);
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
        <caption className={props.userName === null ? "d-none" : "username"}>
          {props.userName}
        </caption>
        {props.profilePhoto === null ? (
          <div className="unknown" />
        ) : (
          <div className="foto-perfil">
            <img src={props.profilePhoto} alt="Profile " />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
