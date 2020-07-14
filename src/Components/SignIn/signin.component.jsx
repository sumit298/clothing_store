import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../Form-Input/form-input.component";
import CustomButton from "../Custom-Button/custom-button.component";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    setForm({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ [name]: value });
  };
  return (
    <div className="sign-in">
      <h1 className="title">I have already an account</h1>
      <span>Sign with your email and password</span>
      <form onSubmit={handleClick}>
        <FormInput
          type="email"
          handleChange={handleChange}
          name="email"
          label="Email"
          required
          value={form.email}
        />
        <FormInput
          type="password"
          handleChange={handleChange}
          name="password"
          required
          label="Password"
          value={form.password}
        />
        <CustomButton>
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
