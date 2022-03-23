import { fetchOrderError, fetchProductsStart, fetchProductsSuccess } from "./productSlice";
import { userRequest, publicRequest } from "./requestMethods";


export const fetchProducts = async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = await publicRequest.get("products");
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchOrderError());
  }
};






