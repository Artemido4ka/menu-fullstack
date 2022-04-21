import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { fetchOrders } from "../redux/apiCalls/order.api";
import OrdersTable from "../components/OrdersTable";

import { StyledButton } from "../components/StyledButton";
import { ArrowBack } from "@material-ui/icons";

const ProductContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  flex: 6;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  padding-bottom: 20px;
`;

const Orders = () => {
  const dispatch = useDispatch();
  const { isFetching, error, orders } = useSelector((state) => state.order);

  useEffect(() => {
    fetchOrders(dispatch);
  }, [dispatch]);

  return (
    <ProductContainer>
      <HomeWrapper>
        <ButtonContainer>
          <Link to={`/`}>
            <StyledButton>
              <ArrowBack />
              На главную страницу
            </StyledButton>
          </Link>
        </ButtonContainer>
        <OrdersTable orders={orders} />
      </HomeWrapper>
    </ProductContainer>
  );
};

export default Orders;
