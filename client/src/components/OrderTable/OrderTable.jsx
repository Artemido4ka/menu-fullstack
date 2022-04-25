import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cancelOrder } from "../../redux/apiCalls/order.api";

import { ArrowBack, DeleteForever } from "@material-ui/icons";
import { RED } from "../../constants";
import { StyledButton } from "../StyledButton";
import {
  Buttons,
  OrderList,
  OrderRow,
  OrderRowName,
  OrderRowValue,
} from "./styled";

const OrderTable = ({ orderValues }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];

  const handleDelete = () => {
    cancelOrder(dispatch, orderId);
  };

  let navigate = useNavigate();
  const returnClickHandler = () => {
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
        <StyledButton margin="0 20px 0 0" onClick={() => returnClickHandler()}>
          <ArrowBack /> К заказам
        </StyledButton>

        <StyledButton background={RED} onClick={() => handleDelete()}>
          <DeleteForever />
          Отменить
        </StyledButton>
      </Buttons>
    </>
  );
};

export default OrderTable;
