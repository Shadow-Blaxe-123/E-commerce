const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: ['Do', 'something'],
        reducers: {
            addToCart(state, action) {
                return state
            },
            removeFromCart(state, action) {
                return state
            }
        }
    }
)

export default cartSlice