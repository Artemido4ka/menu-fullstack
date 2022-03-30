import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import imageReducer from "./imageSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    image: imageReducer,
  },
});
