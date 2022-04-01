import { fetchImageError, fetchImageStart, fetchImageSuccess } from "../imageSlice";
import { userRequest } from "../requestMethods";

export const uploadImage = async (dispatch, image) => {
    dispatch(fetchImageStart());
    try {
        const data = new FormData();
        data.append("image", image);
        const res = await userRequest(
            localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
        ).post("images", data);
        dispatch(fetchImageSuccess(res.data));
    } catch (err) {
        dispatch(fetchImageError());
    }
};