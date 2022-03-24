import {
  fetchOrderError,
  fetchProductsStart,
  fetchProductsSuccess,
} from "./productSlice";
import { userRequest, publicRequest } from "./requestMethods";
import { loginError, loginStart, loginSuccess, logout } from "./userSlice";

export const fetchProducts = async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = await publicRequest.get("products");
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchOrderError());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login/admin", user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    localStorage.setItem("currentUserToken", JSON.stringify(res.data.token));
  } catch (err) {
    dispatch(loginError());
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentUserToken");
  dispatch(logout());
};
