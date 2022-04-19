import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowBack, Beenhere } from "@material-ui/icons";
import { StyledButton } from "../StyledButton";
import {
  Buttons,
  OrderList,
  OrderRow,
  OrderRowName,
  OrderRowValue,
} from "./styled";

const OrderTable = ({ orderValues }) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/orders");
  };

  return (
    <>
      <OrderList>
        <OrderRow>
          <OrderRowName>Название:</OrderRowName>
          <OrderRowValue> {orderValues.title}</OrderRowValue>
        </OrderRow>
        <OrderRow>
          <OrderRowName>Описание:</OrderRowName>
          <OrderRowValue> {orderValues.description}</OrderRowValue>
        </OrderRow>
        <OrderRow>
          <OrderRowName>Цена:</OrderRowName>
          <OrderRowValue> {orderValues.price}</OrderRowValue>
        </OrderRow>
        <OrderRow>
          <OrderRowName>Дата:</OrderRowName>
          <OrderRowValue> {orderValues.date}</OrderRowValue>
        </OrderRow>
        <OrderRow>
          <OrderRowName>Статус:</OrderRowName>
          <OrderRowValue> {orderValues.status}</OrderRowValue>
        </OrderRow>
      </OrderList>
      <Buttons>
        <StyledButton margin="0 20px 0 0" onClick={() => onClickHandler()}>
          <ArrowBack /> К заказам
        </StyledButton>

        <StyledButton type="submit" background="rgba(227, 20, 41, 0.7)">
          <Beenhere />
          Отменить
        </StyledButton>
      </Buttons>
    </>
  );
};

export default OrderTable;
