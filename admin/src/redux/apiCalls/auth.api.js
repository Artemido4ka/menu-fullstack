import { publicRequest, userRequest } from "../requestMethods";
import { fetchUserError, fetchUserStart, fetchUserSuccess, loginError, loginStart, loginSuccess, logout } from "../userSlice";

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

export const fetchIsUserLoggedIn = async (dispatch) => {
    dispatch(fetchUserStart());
    try {
        const res = await userRequest(
            localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
        ).get("users/islogged/");
        dispatch(fetchUserSuccess(res.data));

    } catch (err) {
        dispatch(fetchUserError());
    }
};


