const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    subTotal: 0,
    itemsList: [],
    btnDisabled: true,
  },
  reducers: {
    // State for the visibility of cart.
    toggleCartState: (state) => {
      state.isOpen = !state.isOpen;
    },
    // Adding to Cart.
    addToCart: (state, action) => {
      state.itemsList.push(action.payload);
      state.subTotal += action.payload.price;
      state.btnDisabled = false;
    },
    clearCart: (state) => {
      state.itemsList = [];
      state.subTotal = 0;
      state.btnDisabled = true;
    },
    manipulateQuantity: (state, action) => {
      const result = state.itemsList.find(
        (obj) => obj.itemCode === action.payload.itemCode
      );
      if (result) {
        if (action.payload.type === "+") {
          result.quantity++;
          state.subTotal += result.price;
        } else if (action.payload.type === "-") {
          result.quantity--;
          state.subTotal -= result.price;
          if (result.quantity === 0) {
            // Remove the item from the list
            state.itemsList = state.itemsList.filter(
              (obj) => obj.itemCode !== result.itemCode
            );
            if (state.itemsList.length === 0) {
              state.btnDisabled = true;
            }
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
