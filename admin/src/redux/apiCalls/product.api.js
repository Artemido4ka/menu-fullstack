import { createProductSuccess, fetchDeleteProductSuccess, fetchOneProductSuccess, fetchProductError, fetchProductsStart, fetchProductsSuccess } from "../productSlice";
import { publicRequest, userRequest } from "../requestMethods";

export const fetchProducts = async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
        const res = await publicRequest.get("products");
        dispatch(fetchProductsSuccess(res.data));
    } catch (err) {
        dispatch(fetchProductError());
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

export const deleteProduct = async (dispatch, productId) => {
    dispatch(fetchProductsStart());
    try {
        const res = await userRequest(
            localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
        ).delete("products/" + productId);

        dispatch(fetchDeleteProductSuccess(res.data));
    } catch (err) {
        dispatch(fetchProductError());
    }
};