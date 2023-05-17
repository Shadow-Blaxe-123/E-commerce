const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            isOpen: false,
            subTotal: 0,
            itemsList: []
        },
        reducers: {
            // State for the visibility of cart.
            toggleCartState: (state) => {
                state.isOpen = !state.isOpen;
            },
            // Adding to Cart.
            addToCart: (state, action) => {
                const { payload } = action;
                const { param } = payload;
                console.log(param);
            }
        }
    }
)

export const {toggleCartState, addToCart} = cartSlice.actions
// export const selectYourState = (state) => state.yourSlice.yourState;
// export const selectYourState = (state) => state.cartSlice
export const selectCart = (state) => state

export default cartSlice.reducer