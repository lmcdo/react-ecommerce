// Dependências
import React, { Component } from "react";
import { auth, signInWithGoogle, signInWithGit } from "../../firebase/firebase";
// Componentes
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-buttom/CustomButton";
// CSS
import "./signIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ email: "", password: "" });

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
            <button className="btn-gitHub" onClick={signInWithGit} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
