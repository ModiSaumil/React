// reducers/cartReducer.js
const initialState = {
    cart: [],
    totalAmount: 0,
};

let updatedTotalAmount = 0;

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            newItem.totalPrice = newItem.price;

            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1; 
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                console.warn("add total price", existingItem.totalPrice)
            } else {
                return {
                    ...state,
                    cart: [...state.cart, newItem],
                    totalAmount: state.totalAmount + newItem.totalPrice,
                };
            }
            
            updatedTotalAmount = state.cart.reduce((total, item) => total + item.totalPrice, 0);
            return {
                ...state,
                totalAmount: updatedTotalAmount,
            };

        case 'REMOVE_FROM_CART':
            const removedItem = action.payload;

            if (removedItem.quantity > 1) {
                
                removedItem.quantity -= 1;
                removedItem.totalPrice = removedItem.price * removedItem.quantity;
            } else {
                
                const updatedCart = state.cart.filter(item => item.id !== removedItem.id);
                updatedTotalAmount = updatedCart.reduce((total, item) => total + item.totalPrice, 0);
                return {
                    ...state,
                    cart: updatedCart,
                    totalAmount: updatedTotalAmount,
                };
            }

            updatedTotalAmount = state.cart.reduce((total, item) => total + item.totalPrice, 0);
            return {
                ...state,
                totalAmount: updatedTotalAmount,
            };
        default:
            return state;
    }
};

export default cartReducer;
