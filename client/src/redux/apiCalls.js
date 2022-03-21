import { publicRequest } from "../requestMethods";
import { loginError, loginStart, loginSuccess } from "./userSlice";

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
