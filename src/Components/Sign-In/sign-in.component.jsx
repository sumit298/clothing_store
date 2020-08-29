import React, { Component } from "react";
import FormInput from "../Form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../Custom-Button/custom-button.component";
import { signwithGoogle, auth } from "../../Firebase/firebase.utils.js";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      auth.createUserWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error("Error Occurred", error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            required
            value={this.state.email}
          />
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="Password"
            required
            value={this.state.password}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton googleSignIn onClick={signwithGoogle}>
              sign with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
