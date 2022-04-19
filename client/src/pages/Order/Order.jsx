import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../components//Navbar/Navbar";
import { fetchOneUserOrder } from "../../redux/apiCalls/order.api";
import OrderTable from "../../components/OrderTable/OrderTable";

import {
  InfoContainer,
  OrderContainer,
  ProductImage,
  ProductRow,
  ProductsContainer,
} from "./styled";

const Order = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const { isFetching, error, order } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const handleForm = (formValues) => {
    // updateOrder(dispatch, formValues, orderId);
  };

  useEffect(() => {
    fetchOneUserOrder(dispatch, orderId);
  }, [dispatch, orderId]);

  return (
    <>
      <Navbar />
      <OrderContainer>
        <ProductsContainer>
          {!isFetching &&
            order &&
            order.products.map((product) => (
              <ProductRow key={product.id}>
                <ProductImage src={`http://localhost:5000/${product.image}`} />
              </ProductRow>
            ))}
        </ProductsContainer>
        <InfoContainer>
          {!isFetching && order && (
            <OrderTable orderValues={order} handleForm={handleForm} />
          )}
        </InfoContainer>
      </OrderContainer>
    </>
  );
};

export default Order;
