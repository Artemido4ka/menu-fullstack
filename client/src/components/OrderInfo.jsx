import React from "react";

import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { ArrowBack, Beenhere } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Container = styled.div``;

const OrderList = styled.div`
  overflow: hidden;
  border-radius: 5px;
`;

const OrderRow = styled.div`
  background: rgba(199, 136, 93, 0.1);
  font-size: 16px;
  padding: 10px;
  :nth-child(odd) {
    background: rgba(24, 144, 150, 0.2);
  }
`;

const OrderInfo = ({ orderValues }) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/orders");
  };

  return (
    <Container>
      <OrderList>
        <OrderRow>{orderValues.title}</OrderRow>
        <OrderRow>{orderValues.description}</OrderRow>
        <OrderRow>{orderValues.price}</OrderRow>
        <OrderRow>{orderValues.date}</OrderRow>
        <OrderRow>{orderValues.status}</OrderRow>
      </OrderList>

      <Buttons>
        <StyledButton margin="0 20px 0 0" onClick={() => onClickHandler()}>
          <ArrowBack /> Go back
        </StyledButton>

        <StyledButton type="submit" background="rgba(227, 20, 41, 0.7)">
          <Beenhere />
          Отменить
        </StyledButton>
      </Buttons>
    </Container>
  );
};

export default OrderInfo;
