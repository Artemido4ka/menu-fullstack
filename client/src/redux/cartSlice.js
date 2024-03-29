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
      let isNew = true;

      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity + action.payload.quantity;
          isNew = false;
        }
        return product;
      });
      if (isNew) state.products.push(action.payload);

      state.quantity += action.payload.quantity;

      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    clearCart: () => initialState,

    changeProductQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.newQuantity;
        }
        return product;
      });
      const newSum = Number(
        (state.totalPrice + action.payload.priceDiff).toFixed(2)
      );
      state.totalPrice = newSum;

      let result = state.products.reduce(function (sum, elem) {
        return sum + elem.quantity;
      }, 0);

      state.quantity = result;
    },
  },
});

export const { addProduct, clearCart, changeProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
