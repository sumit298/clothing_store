import React from "react";
import SignIn from "../../Components/Sign-In/sign-in.component";
import "./sign.styles.scss";
import SignUp from "../../Components/Sign-Up/sign-up.component";

const SignPage = () => {
  return (
    <div className="sign">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignPage;
