import { userRequest } from "../requestMethods";
import { fetchAllUsersSuccess, fetchUserError, fetchUserStart, fetchUserSuccess } from "../userSlice";

export const fetchUserProfile = async (dispatch, userId) => {
    dispatch(fetchUserStart());
    try {
        const res = await userRequest(
            localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
        ).get("users/" + userId);

        dispatch(fetchUserSuccess(res.data));
    } catch (err) {
        dispatch(fetchUserError());
    }
};

export const updateUser = async (dispatch, updatedUser) => {
    dispatch(fetchUserStart());
    try {
        const res = await userRequest(
            localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
        ).put("users/", updatedUser);

        localStorage.setItem("currentUser", JSON.stringify(res.data));
        dispatch(fetchUserSuccess(res.data));
    } catch (err) {
        dispatch(fetchUserError());
    }
};

export const getAllUsers = async (dispatch) => {
    dispatch(fetchUserStart());
    try {
        const res = await userRequest(
            localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
        ).get("users");
        console.log(res.data)

        dispatch(fetchAllUsersSuccess(res.data));
    } catch (err) {
        dispatch(fetchUserError());
    }
};