export const addItemToCart = (cartItems, cartItemsToAdd) => {
	// First checking the id of the cart item we pressed
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemsToAdd.id
	);

	if (existingCartItem) {
		// If it matches that id we are mapping if there are more than 1 with same
		// id, if it is then we are increasing the other property quantity to
		// re render the component again as state change
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemsToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// If we don't find that id that are pressed more than once then we are
	// returning the original array as state does not change.

	return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
