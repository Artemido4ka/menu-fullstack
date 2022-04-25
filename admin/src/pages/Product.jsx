import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  deleteProduct,
  fetchOneProduct,
  updateProduct,
} from "../redux/apiCalls/product.api";
import Navbar from "../components/Navbar/Navbar";
import defaultProduct from "../images/defaultProduct.jpg";
import ProductForm from "../components/ProductForm";
import { devices } from "../devices";

import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { ArrowBack, DeleteForever } from "@material-ui/icons";
import { RED, SUPERLIGHTGREEN } from "../constants";

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
  background: ${SUPERLIGHTGREEN};
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

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const { isFetching, error, product } = useSelector((state) => state.product);
  const { image } = useSelector((state) => state.image);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchOneProduct(dispatch, productId);
  }, [dispatch, productId]);

  const handleForm = (formValues) => {
    updateProduct(dispatch, formValues, productId);
  };

  const handleImageSrc = () => {
    if (image) return `http://localhost:5000/${image}`;
    if (product) return `http://localhost:5000/${product.image}`;
    return defaultProduct;
  };

  const handleDelete = () => {
    deleteProduct(dispatch, productId);
    returnClickHandler();
    console.log("DELETE");
  };

  let navigate = useNavigate();
  const returnClickHandler = () => {
    navigate("/products");
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

            <Buttons>
              <StyledButton
                margin="0 20px 0 0"
                onClick={() => returnClickHandler()}
              >
                <ArrowBack /> назад
              </StyledButton>
              <StyledButton background={RED} onClick={() => handleDelete()}>
                <DeleteForever />
                удалить
              </StyledButton>
            </Buttons>
          </InfoContainer>
        </ProductContainer>
      )}
    </>
  );
};

export default Product;
