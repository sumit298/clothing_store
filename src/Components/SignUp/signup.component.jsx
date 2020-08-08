import React, { useState } from "react";
import "./signup.styles.scss";
import FormInput from "../Form-Input/form-input.component";
import CustomButton from "../Custom-Button/custom-button.component";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

const SignUp = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Password don't matched");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state,[name]: value });
  };
  const { displayName, email, password, confirmPassword } = state;
  return (
    <div>
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="Display Name"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="email"
            label="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            label="Password"
            value={password}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
