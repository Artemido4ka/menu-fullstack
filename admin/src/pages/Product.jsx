import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import ProductForm from "../components/ProductForm";

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

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductContainer>
        <ImgContainer>
          <Image src={`http://localhost:5000/`} />
        </ImgContainer>
        <InfoContainer>
          <ProductForm />
        </InfoContainer>
      </ProductContainer>
    </>
  );
};

export default Home;
