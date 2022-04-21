import { fetchOneOrderSuccess, fetchOrderError, fetchOrdersStart, fetchOrdersSuccess } from "../orderSlice";
import { userRequest } from "../requestMethods";

export const fetchOrders = async (dispatch) => {
    dispatch(fetchOrdersStart());
    try {
      const res = await userRequest(
        localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
      ).get("orders");
      dispatch(fetchOrdersSuccess(res.data));
    } catch (err) {
      dispatch(fetchOrderError());
    }
  };
  
  export const fetchOneOrder = async (dispatch, id) => {
    dispatch(fetchOrdersStart());
    try {
      const res = await userRequest(
        localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
      ).get("orders/" + id);
      dispatch(fetchOneOrderSuccess(res.data));
    } catch (err) {
      dispatch(fetchOrderError());
    }
  };
  
  export const updateOrder = async (dispatch, newOrder, productId) => {
    dispatch(fetchOrdersStart());
    try {
      const res = await userRequest(
        localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
      ).put("orders/" + productId, newOrder);
      
      dispatch(fetchOneOrderSuccess(res.data));
    } catch (err) {
      dispatch(fetchOrderError());
    }
  };