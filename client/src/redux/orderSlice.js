import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
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
      state.order = action.payload.order;
    },
    operateOrderError: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // registrateStart: (state) => {
    //   state.isFetching = true;
    // },
    // registrateSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.error = false;
    //   state.user = action.payload.user;
    //   state.currentUserToken = action.payload.token.token;
    // },
    // registrateError: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
    // logout: (state) => {
    //   state.user = null;
    //   state.currentUserToken = null;
    // },
  },
});

export const {
  operateOrderStart,
  //   loginSuccess,
  operateOrderError,
  //   registrateStart,
  createOrderSuccess,
  //   registrateError,
  //   logout,
} = orderSlice.actions;
export default orderSlice.reducer;
