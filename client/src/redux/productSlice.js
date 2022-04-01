import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
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
    fetchProductsError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    fetchOneProductSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.product = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
  fetchOneProductSuccess
} = productSlice.actions;
export default productSlice.reducer;
