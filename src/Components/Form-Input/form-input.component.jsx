import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherFormProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormProps}
      />
      {label && (
        <label
          className={`${
            otherFormProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
