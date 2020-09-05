import { CartActionTypes } from './cartActionTypes';
import { addItemToCart } from './Cart.utils';

// Initial state of the cartReducer
const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
