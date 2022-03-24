import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchImageStart: (state) => {
      state.isFetching = true;
    },
    fetchImageSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.image = action.payload.image;
    },
    fetchImageError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearImage: (state) => {
      state.image = null;
    },
  },
});

export const {
  fetchImageStart,
  fetchImageSuccess,
  fetchImageError,
  clearImage,
} = imageSlice.actions;
export default imageSlice.reducer;
