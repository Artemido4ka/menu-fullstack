import { publicRequest } from "../requestMethods";
import {
  loginError,
  loginStart,
  loginSuccess,
  registrateStart,
  registrateSuccess,
  registrateError,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res);
  } catch (err) {
    dispatch(loginError());
  }
};

export const registrate = async (dispatch, user) => {
  dispatch(registrateStart());
  try {
    const res = await publicRequest.post("auth/registration", user);
    // dispatch(registrateSuccess(res.data));
    console.log(res);
  } catch (err) {
    dispatch(registrateError());
  }
};
