import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  inverted,
  googleSignIn,
  ...otherButtonProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
