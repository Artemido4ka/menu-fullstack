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
      state.quantity += 1;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    clearCart: () => initialState,
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
