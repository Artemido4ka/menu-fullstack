import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;
  
  /* gap: 20px; */
`;


const Products = () => {
  return (
    <>
      <Navbar />
      <ProductContainer>
        <Sidebar />
        <HomeWrapper>
         
            <ProductsTable />
       
        </HomeWrapper>
      </ProductContainer>
    </>
  );
};

export default Products;
