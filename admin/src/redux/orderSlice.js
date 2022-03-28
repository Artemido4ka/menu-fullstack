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
    // fetchOneOrderSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.error = false;
    //   state.product = action.payload;
    // },
    fetchOrderError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // createProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.error = false;
    //   state.products.push(action.payload);
    // },
  },
});

export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
//   fetchOneOrderSuccess,
  fetchOrderError,
  //   createProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
