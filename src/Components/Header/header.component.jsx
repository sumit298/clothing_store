import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/coronavirus.svg";
import "./header.style.scss";
import { auth } from "../../Firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../Cart-Item/cart-item.component";
import CartDropDown from "../Cart-DropDown/cart-dropdown.component";
const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
