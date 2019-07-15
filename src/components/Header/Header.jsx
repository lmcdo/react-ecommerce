import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Unknown } from "../../assets/user-solid.svg";
import "./header.scss";

const Header = props => {
  console.log(props);
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

export default Header;
