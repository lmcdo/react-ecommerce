import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/signup/SignUp";
import "./login.scss";

const Login = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
