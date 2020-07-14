import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/coronavirus.svg";
import "./header.style.scss";
import { auth } from "../../Firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
