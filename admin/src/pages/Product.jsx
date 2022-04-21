import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchOneProduct, updateProduct } from "../redux/apiCalls/product.api";
import Navbar from "../components/Navbar";
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
  flex: 2;
  @media ${devices.tablet} {
    margin: 0 50px;
  }
`;

const ProductRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;

  background: rgba(24, 144, 150, 0.2);
  :nth-child(odd) {
    color: rgba(199, 136, 93, 1);
    background: rgba(24, 144, 150, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 3;
  @media ${devices.laptopL} {
    margin: 0px 50px;
  }
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const { isFetching, error, product } = useSelector((state) => state.product);
  const { image } = useSelector((state) => state.image);
  console.log(product, "PRODUCT");

  const dispatch = useDispatch();

  const handleForm = (formValues) => {
    // console.log(formValues);
    updateProduct(dispatch, formValues, productId);
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
      {!isFetching && product && (
        <ProductContainer>
          <ImgContainer>
            <ProductRow>
              <Image src={handleImageSrc()} />
            </ProductRow>
          </ImgContainer>
          <InfoContainer>
            <ProductForm
              productValues={product}
              handleForm={handleForm}
              loadedImage={image}
            />
          </InfoContainer>
        </ProductContainer>
      )}
    </>
  );
};

export default Product;
