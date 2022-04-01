import { clearCart } from "../cartSlice";
import { createOrderSuccess, fetchOrderError, fetchOrdersStart, fetchUserOneOrderSuccess, fetchUserOrdersSuccess } from "../orderSlice";
import { userRequest } from "../requestMethods";

export const createOrder = async (dispatch, newOrder) => {
    dispatch(fetchOrdersStart());
    try {
      const res = await userRequest(
        localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
      ).post("orders", newOrder);
      console.log(res.data);
      dispatch(createOrderSuccess(res.data));
      dispatch(clearCart());
    } catch (err) {
      dispatch(fetchOrderError());
      throw new Error();
    }
  };
  
  export const fetchOrders = async (dispatch) => {
    dispatch(fetchOrdersStart());
    try {
      const res = await userRequest(
        localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
      ).get("orders/user");
      dispatch(fetchUserOrdersSuccess(res.data));
    } catch (err) {
      dispatch(fetchOrderError());
    }
  };
  
  export const fetchOneUserOrder = async (dispatch, productId) => {
    dispatch(fetchOrdersStart());
    try {
      const res = await userRequest(
        localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
      ).get("orders/user/" + productId);
      console.log(res.data);
      dispatch(fetchUserOneOrderSuccess(res.data));
    } catch (err) {
      dispatch(fetchOrderError());
    }
  };