import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import orderSlice from "./orderSlice";
import userSlice from "./userSlice";
import imageSlice from "./imageSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
    user: userSlice,
    image: imageSlice,
  },
});
