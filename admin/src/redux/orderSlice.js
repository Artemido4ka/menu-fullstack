import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    order: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchOrdersStart: (state) => {
      state.isFetching = true;
    },
    fetchOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.orders = action.payload;
    },
    fetchOneOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.order = action.payload;
    },
    fetchDeleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.orders = action.payload;
      state.order = null;
    },
    fetchOrderError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOneOrderSuccess,
  fetchOrderError,
  fetchDeleteOrderSuccess
} = productSlice.actions;
export default productSlice.reducer;
