import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import "./login.scss";

const Login = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h3>Login</h3>
      <SignIn />
    </div>
  );
};

export default Login;
