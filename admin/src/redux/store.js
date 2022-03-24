import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});
