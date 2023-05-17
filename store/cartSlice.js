const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice(
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

export default cartSlice.reducer