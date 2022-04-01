import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import { fetchOneUserOrder } from "../redux/apiCalls/order.api";
import { devices } from "../devices";

import styled from "styled-components";
import OrderInfo from "../components/OrderInfo";

const OrderContainer = styled.div`
  padding: 50px;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const ProductsContainer = styled.div`
  flex: 1;
`;

const ProductRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

const ProductName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

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
                <ProductName>{product.title} </ProductName>
                <ProductImage src={`http://localhost:5000/${product.image}`} />
              </ProductRow>
            ))}
        </ProductsContainer>
        <InfoContainer>
          {!isFetching && order && (
            <OrderInfo orderValues={order} handleForm={handleForm} />
          )}
        </InfoContainer>
      </OrderContainer>
    </>
  );
};

export default Order;
