import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import NewProduct from "../components/NewProduct";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;

  /* gap: 20px; */
`;

const Products = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar />
      <ProductContainer>
        <Sidebar />
        <HomeWrapper>
          <button onClick={handleClickOpen}>Create Product</button>
          {open ? <NewProduct handleOpen={setOpen} /> : null}
          <ProductsTable />
        </HomeWrapper>
      </ProductContainer>
    </>
  );
};

export default Products;
