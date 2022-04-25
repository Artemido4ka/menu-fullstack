import { clearCart } from "../cartSlice";
import { createOrderSuccess, fetchCancelOrderSuccess, fetchOrderError, fetchOrdersStart, fetchUserOneOrderSuccess, fetchUserOrdersSuccess } from "../orderSlice";
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

export const fetchOneUserOrder = async (dispatch, orderId) => {
  dispatch(fetchOrdersStart());
  try {
    const res = await userRequest(
      localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
    ).get("orders/user/" + orderId);
    dispatch(fetchUserOneOrderSuccess(res.data));
  } catch (err) {
    dispatch(fetchOrderError());
  }
};

export const cancelOrder = async (dispatch, orderId) => {
  dispatch(fetchOrdersStart());
  try {
    const res = await userRequest(
      localStorage.getItem("currentUserToken").replace(/['"]+/g, "")
    ).get("orders/cancel/" + orderId);
    dispatch(fetchCancelOrderSuccess(res.data));
  } catch (err) {
    dispatch(fetchOrderError());
  }
};