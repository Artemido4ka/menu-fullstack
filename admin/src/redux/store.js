import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import imageSlice from "./imageSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    image: imageSlice,
  },
});
