import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import { createProduct } from "../redux/apiCalls/product.api";
import defaultProduct from "../images/defaultProduct.jpg";
import ProductForm from "../components/ProductForm";
import { devices } from "../devices";

import styled from "styled-components";

const ProductContainer = styled.div`
  padding: 50px;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;

  object-fit: cover;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const CreateProduct = () => {
  const { isFetching, error, image } = useSelector((state) => state.image);

  const dispatch = useDispatch();

  const handleForm = (formValues) => {
    createProduct(dispatch, formValues);
  };

  return (
    <>
      <Navbar />
      <ProductContainer>
        <ImgContainer>
          <Image
            src={image ? `http://localhost:5000/${image}` : defaultProduct}
          />
        </ImgContainer>
        <InfoContainer>
          <ProductForm handleForm={handleForm} loadedImage={image} />
        </InfoContainer>
      </ProductContainer>
    </>
  );
};

export default CreateProduct;
