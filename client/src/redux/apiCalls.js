import { publicRequest } from "../requestMethods";
import { clearCart } from "./cartSlice";
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
    console.log(res.data);
    localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    localStorage.setItem(
      "currentUserToken",
      JSON.stringify(res.data.token.token)
    );
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
    localStorage.setItem(
      "currentUserToken",
      JSON.stringify(res.data.token.token)
    );
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
