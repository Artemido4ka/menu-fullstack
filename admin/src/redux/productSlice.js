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
    fetchOrderError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchOrderError,
} = productSlice.actions;
export default productSlice.reducer;
