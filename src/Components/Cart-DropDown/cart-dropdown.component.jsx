import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../Custom-Button/custom-button.component';
import { connect } from 'react-redux';
import CartItemsNav from '../Cart-Items-Nav/cart-items-nav.component';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItemsNav key="cartItem.id" item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
