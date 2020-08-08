import React from "react";
import "./sign.styles.scss";
import SignIn from "../../Components/SignIn/signin.component";
import SignUp from "../../Components/SignUp/signup.component";
const SignPage = () => {
  return (
    <div className="sign">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignPage;
