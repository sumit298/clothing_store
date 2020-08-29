import React from "react";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../Firebase/firebase.utils";
import CustomButton from "../Custom-Button/custom-button.component";
import FormInput from "../Form-input/form-input.component";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      //   For clearing our form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event)=>{
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="Display Name"
            value={displayName}
            name="displayName"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            name="email"
            required
          />
          <FormInput
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            name="password"
            required
          />
          <FormInput
            type="password"
            label="Confirm your password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
