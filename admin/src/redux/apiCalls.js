import {
  fetchImageError,
  fetchImageStart,
  fetchImageSuccess,
} from "./imageSlice";
import {
  createProductSuccess,
  fetchOneProductSuccess,
  fetchProductError,
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
    dispatch(fetchProductError());
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

export const createProduct = async (dispatch, newProduct) => {
  dispatch(fetchProductsStart());
  try {
    const res = await userRequest(
      localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
    ).post("products", newProduct);
    dispatch(createProductSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductError());
  }
};

export const fetchOneProduct = async (dispatch, id) => {
  dispatch(fetchProductsStart());
  try {
    const res = await publicRequest.get("products/" + id);
    dispatch(fetchOneProductSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductError());
  }
};

export const updateProduct = async (dispatch, newProduct, productId) => {
  dispatch(fetchProductsStart());
  try {
    const res = await userRequest(
      localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
    ).put("products/" + productId, newProduct);

    dispatch(fetchOneProductSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductError());
  }
};