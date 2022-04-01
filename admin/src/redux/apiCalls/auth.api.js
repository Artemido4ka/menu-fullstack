import { publicRequest } from "../requestMethods";
import { loginError, loginStart, loginSuccess, logout } from "../userSlice";

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