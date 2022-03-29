import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../redux/apiCalls";
import OrdersTable from "../components/OrdersTable";

import { StyledButton } from "../components/StyledButton";
import { ArrowBack } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
              To home page
            </StyledButton>
          </Link>
        </ButtonContainer>
        <OrdersTable orders={orders} />
      </HomeWrapper>
    </ProductContainer>
  );
};

export default Orders;
