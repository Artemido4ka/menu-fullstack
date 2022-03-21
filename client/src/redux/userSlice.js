import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null,
    currentUserToken: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload.user;
      state.currentUserToken = action.payload.token.token;

    },
    loginError: (state) => {
      state.isFetching = false;
      state.error = true;
    },


    registrateStart: (state) => {
      state.isFetching = true;
    },
    registrateSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload.user;
      state.currentUserToken = action.payload.token.token;
    },
    registrateError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  registrateStart,
  registrateSuccess,
  registrateError,
} = userSlice.actions;
export default userSlice.reducer;
