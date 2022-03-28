import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";

import NewProduct from "../components/NewProduct";
import { fetchProducts } from "../redux/apiCalls";
import { clearImage } from "../redux/imageSlice";

import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  padding-bottom: 20px;
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
          <ButtonContainer>
            <StyledButton onClick={handleClickOpen}>
              Create New Product
            </StyledButton>
          </ButtonContainer>

          {open && <NewProduct handleOpen={setOpen} />}
          <ProductsTable products={products} />
        </HomeWrapper>
      </ProductContainer>
    </>
  );
};

export default Products;
