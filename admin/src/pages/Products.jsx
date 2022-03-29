import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductsTable from "../components/ProductsTable";
import { fetchProducts } from "../redux/apiCalls";

import styled from "styled-components";
import { ArrowBack, Create } from "@material-ui/icons";
import { StyledButton } from "../components/StyledButton";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const Products = () => {
  const dispatch = useDispatch();
  const { isFetching, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <ProductContainer>
      <HomeWrapper>
        <ButtonContainer>
          <Link to={`/`}>
            <StyledButton>
              <ArrowBack />
              To home page
            </StyledButton>
          </Link>
          <Link to={`/products/new`}>
            <StyledButton>
              <Create />
              Create New Product
            </StyledButton>
          </Link>
        </ButtonContainer>
        <ProductsTable products={products} />
      </HomeWrapper>
    </ProductContainer>
  );
};

export default Products;
