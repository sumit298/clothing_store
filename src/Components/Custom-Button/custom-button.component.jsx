import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignIn, ...otherButtonProps }) {
  return (
    <div>
      <button
        className={`${isGoogleSignIn && "google-sign-in"} custom-button`}
        {...otherButtonProps}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
