import { clearCart } from "../cartSlice";
import { publicRequest } from "../requestMethods";
import { loginError, loginStart, loginSuccess, logout, registrateError, registrateStart, registrateSuccess } from "../userSlice";

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