import { fetchOneProductSuccess, fetchProductsError, fetchProductsStart, fetchProductsSuccess } from "../productSlice";
import { publicRequest } from "../requestMethods";


export const fetchProducts = async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const res = await publicRequest.get("products");
      dispatch(fetchProductsSuccess(res.data));
    } catch (err) {
      dispatch(fetchProductsError());
    }
  };
  
  
  export const fetchOneProduct = async (dispatch, productId) => {
    dispatch(fetchProductsStart());
    try {
      const res = await publicRequest.get("/products/" + productId);
      dispatch(fetchOneProductSuccess(res.data));
    } catch (err) {
      dispatch(fetchProductsError());
    }
  };