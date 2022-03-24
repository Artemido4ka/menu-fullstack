import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import NewProduct from "../components/NewProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/apiCalls";
import { clearImage } from "../redux/imageSlice";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;

  /* gap: 20px; */
`;

const Products = () => {
  const dispatch = useDispatch();
  const { isFetching, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
    dispatch(clearImage());
  };
  return (
    <>
      <Navbar />
      <ProductContainer>
        <Sidebar />
        <HomeWrapper>
          <button onClick={handleClickOpen}>Create Product</button>
          {open && <NewProduct handleOpen={setOpen} />}
          <ProductsTable products={products} />
        </HomeWrapper>
      </ProductContainer>
    </>
  );
};

export default Products;
