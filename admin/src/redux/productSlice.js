import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.isFetching = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products = action.payload;
    },
    fetchProductError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    createProductSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products.push(action.payload);
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductError,
  createProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
