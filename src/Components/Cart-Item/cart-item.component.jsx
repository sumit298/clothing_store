import React from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./cart-item.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cartActions";
const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
