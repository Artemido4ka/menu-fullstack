import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    operateOrderStart: (state) => {
      state.isFetching = true;
    },
    createOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.orders.push(action.payload);
    },
    operateOrderError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  operateOrderStart,
  operateOrderError,
  createOrderSuccess,
} = orderSlice.actions;
export default orderSlice.reducer;
