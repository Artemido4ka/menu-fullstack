import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import orderSlice from "./orderSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderSlice,
  },
});
