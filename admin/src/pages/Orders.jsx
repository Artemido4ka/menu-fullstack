import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, fetchProducts } from "../redux/apiCalls";
import { clearImage } from "../redux/imageSlice";
import OrdersTable from "../components/OrdersTable";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;

  /* gap: 20px; */
`;

const Orders = () => {
  const dispatch = useDispatch();
  const { isFetching, error, orders } = useSelector((state) => state.order);


  useEffect(() => {
    fetchOrders(dispatch);
  }, [dispatch]);
  console.log(orders);

  return (
    <>
      <Navbar />
      <ProductContainer>
        <Sidebar />
        <HomeWrapper>
          <OrdersTable orders={orders}/>
          {/* <ProductsTable products={products} /> */}
        </HomeWrapper>
      </ProductContainer>
    </>
  );
};

export default Orders;
