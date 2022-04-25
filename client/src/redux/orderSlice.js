import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
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
    createOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.orders.push(action.payload);
    },
    fetchOrderError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    fetchUserOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.orders = action.payload;
    },
    fetchUserOneOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.order = action.payload;
    },
    fetchCancelOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.order = action.payload.order;
      state.orders = action.payload.orders;
    },
  },
});

export const {
  fetchOrdersStart,
  fetchOrderError,
  createOrderSuccess,
  fetchUserOrdersSuccess,
  fetchUserOneOrderSuccess,
  fetchCancelOrderSuccess,
} = orderSlice.actions;
export default orderSlice.reducer;
