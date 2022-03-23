import { publicRequest, userRequest } from "../requestMethods";
import { clearCart } from "./cartSlice";
import {
  operateOrderError,
  operateOrderStart,
  createOrderSuccess,
} from "./orderSlice";
import {
  loginError,
  loginStart,
  loginSuccess,
  registrateStart,
  registrateSuccess,
  registrateError,
  logout,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    localStorage.setItem("currentUserToken", JSON.stringify(res.data.token));
  } catch (err) {
    dispatch(loginError());
  }
};

export const registrate = async (dispatch, user) => {
  dispatch(registrateStart());
  try {
    const res = await publicRequest.post("auth/registration", user);
    dispatch(registrateSuccess(res.data));
    localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    localStorage.setItem("currentUserToken", JSON.stringify(res.data.token));
  } catch (err) {
    dispatch(registrateError());
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentUserToken");
  dispatch(logout());
  dispatch(clearCart());
};

export const createOrder = async (dispatch, newOrder) => {
  dispatch(operateOrderStart());
  try {
    const res = await userRequest(localStorage.getItem("currentUserToken").replace(/['"]+/g, "")).post("orders", newOrder);
    console.log(res.data);
    dispatch(createOrderSuccess(res.data));
    dispatch(clearCart());
  } catch (err) {
    dispatch(operateOrderError());
    throw new Error();
  }
};
