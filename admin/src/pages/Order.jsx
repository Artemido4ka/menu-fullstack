import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import ProductForm from "../components/ProductForm";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchOneProduct, updateProduct } from "../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";

import defaultProduct from "../images/defaultProduct.jpg";

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

const Order = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const { isFetching, error, product } = useSelector((state) => state.product);
  const { image } = useSelector((state) => state.image);

  const dispatch = useDispatch();

  const handleForm = (formValues) => {
    updateProduct(dispatch, formValues, productId);
    console.log(formValues);
  };

  useEffect(() => {
    fetchOneProduct(dispatch, productId);
  }, [dispatch, productId]);

  const handleImageSrc = () => {
    if (image) return `http://localhost:5000/${image}`;
    if (product) return `http://localhost:5000/${product.image}`;
    return defaultProduct;
  };

  return (
    <>
      <Navbar />
      <ProductContainer>
        <ImgContainer>
          <Image src={handleImageSrc()} />
        </ImgContainer>
        <InfoContainer>
          {!isFetching && product && (
            <ProductForm
              productValues={product}
              handleForm={handleForm}
              loadedImage={image}
            />
          )}
        </InfoContainer>
      </ProductContainer>
    </>
  );
};

export default Order;
