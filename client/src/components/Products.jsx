import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "./Product";

import { fetchProducts } from "../redux/apiCalls";

import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const dispatch = useDispatch();
  const { isFetching, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
