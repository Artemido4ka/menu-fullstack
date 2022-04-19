import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuProduct from "./MenuProduct/MenuProduct";

import { fetchProducts } from "../redux/apiCalls/product.api";

import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuProducts = () => {
  const dispatch = useDispatch();
  const { isFetching, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <Container>
      {products.map((product) => (
        <MenuProduct product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default MenuProducts;
