import React, { Component } from "react";
import FormInput from "../Form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../Custom-Button/custom-button.component";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
