import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload)
      state.quantity += 1;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    clearCart: () => initialState,
    changeProductQuantity: (state, action) => {

      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.newQuantity;

        }
        return product
      })
      state.totalPrice = state.totalPrice + action.payload.priceDiff;
    },
  },
});

export const { addProduct, clearCart, changeProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
