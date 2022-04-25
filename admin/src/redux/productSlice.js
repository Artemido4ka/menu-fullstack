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
    fetchOneProductSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.product = action.payload;
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
    fetchDeleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products = action.payload;
      state.product = null;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductError,
  createProductSuccess,
  fetchOneProductSuccess,
  fetchDeleteProductSuccess
} = productSlice.actions;
export default productSlice.reducer;
