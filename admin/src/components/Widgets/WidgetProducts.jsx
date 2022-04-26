import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchOrders } from "../../redux/apiCalls/order.api";

import { KeyboardArrowUp } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { fetchProducts } from "../../redux/apiCalls/product.api";
import { RED, WHITE } from "../../constants";

const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
  min-width: 130px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(160, 160, 160);
`;

const Counter = styled.span`
  font-size: 28px;
  font-weight: 300;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Percentage = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  &.positive {
    color: green;
  }
  &.negative {
    color: red;
  }
`;

const WidgetProducts = () => {
  const dispatch = useDispatch();
  const { isFetching, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <WidgetContainer>
      <Left>
        <Title>Блюда</Title>
        <Counter>{products.length}</Counter>
        <Link to={"products"}>подробнее</Link>
      </Left>
      <Right>
        <Percentage>
          <KeyboardArrowUp />
        </Percentage>
        <ShoppingCartOutlined
          className="icon"
          style={{
            color: `${WHITE}`,
            backgroundColor: `${RED}`,
          }}
        />
      </Right>
    </WidgetContainer>
  );
};

export default WidgetProducts;
