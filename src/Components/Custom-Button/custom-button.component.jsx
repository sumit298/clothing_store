import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, googleSignIn, ...otherButtonProps }) => {
  return (
    <button
      className={`${googleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
