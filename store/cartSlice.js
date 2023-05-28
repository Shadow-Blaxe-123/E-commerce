const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    subTotal: 0,
    itemsList: [],
  },
  reducers: {
    // State for the visibility of cart.
    toggleCartState: (state) => {
      state.isOpen = !state.isOpen;
    },
    // Adding to Cart.
    addToCart: (state, action) => {
      state.itemsList.push(action.payload);
    },
    clearCart: (state) => {
      state.itemsList = [];
    },
    manipulateQuantity: (state, action) => {
      const result = state.itemsList.find(
        (obj) => obj.itemCode === action.payload.itemCode
      );

      if (result) {
        if (action.payload.type === "+") {
          result.quantity++;
        } else if (action.payload.type === "-") {
          result.quantity--;
          if (result.quantity === 0) {
            // Remove the item from the list
            state.itemsList = state.itemsList.filter(
              (obj) => obj.itemCode !== result.itemCode
            );
          }
        }
      }
    },
  },
});

export const { toggleCartState, addToCart, clearCart, manipulateQuantity } =
  cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
