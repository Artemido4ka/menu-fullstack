import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    subUser: null,
    currentUserToken: null,
    isFetching: false,
    error: false,
    users: [],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload.user;
      state.currentUserToken = action.payload.token;
    },
    loginError: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logout: (state) => {
      state.user = null;
      state.currentUserToken = null;
    },

    fetchUserStart: (state) => {
      state.isFetching = true;
    },
    fetchUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload;
      // state.currentUserToken = action.payload.token;
    },
    fetchSubUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.subUser = action.payload;
    },

    fetchAllUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.users = action.payload;
    },
    fetchUserError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  logout,
  fetchUserStart,
  fetchUserSuccess,
  fetchSubUserSuccess,
  fetchUserError,
  fetchAllUsersSuccess,
} = userSlice.actions;
export default userSlice.reducer;
