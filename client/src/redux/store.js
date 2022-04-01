import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import productReducer from "./productSlice";
import imageReducer from "./imageSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    product: productReducer,
    image: imageReducer,
  },
});
