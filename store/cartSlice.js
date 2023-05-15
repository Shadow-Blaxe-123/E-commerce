const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            isOpen: false
        },
        reducers: {
            // State for the visibility of cart.
            toggleCartState: (state) => {
                state.isOpen = !state.isOpen;
            }
        }
    }
)

export const {toggleCartState} = cartSlice.actions

export default cartSlice.reducer