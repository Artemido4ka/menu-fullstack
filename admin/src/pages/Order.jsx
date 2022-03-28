import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import ProductForm from "../components/OrderForm";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchOneOrder,
  fetchOneProduct,
  updateOrder,
  updateProduct,
} from "../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";

import defaultProduct from "../images/defaultProduct.jpg";
import OrderForm from "../components/ProductForm";

const ProductContainer = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Order = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const { isFetching, error, order } = useSelector((state) => state.order);
  const { image } = useSelector((state) => state.image);

  const dispatch = useDispatch();

  const handleForm = (formValues) => {
    updateOrder(dispatch, formValues, orderId);
    // console.log(formValues);
  };

  useEffect(() => {
    fetchOneOrder(dispatch, orderId);
  }, [dispatch, orderId]);

  //   const handleImageSrc = () => {
  //     if (image) return `http://localhost:5000/${image}`;
  //     if (order) return `http://localhost:5000/${order.image}`;
  //     return defaultProduct;
  //   };

  return (
    <>
      <Navbar />
      <ProductContainer>
        {!isFetching && order && (
          <ProductForm
            productValues={order}
            handleForm={handleForm}
          />
        )}
      </ProductContainer>
    </>
  );
};

export default Order;
