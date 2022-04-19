import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowBack } from "@material-ui/icons";
import { StyledButton } from "../StyledButton";

import {
  Buttons,
  OrderList,
  ProductRow,
  ProductRowName,
  ProductRowValue,
} from "./styled";

const ProductTable = ({ productValues }) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };
  console.log(productValues);

  return (
    <>
      <OrderList>
        <ProductRow>
          <ProductRowName>Название:</ProductRowName>
          <ProductRowValue> {productValues.title}</ProductRowValue>
        </ProductRow>
        <ProductRow>
          <ProductRowName>Описание:</ProductRowName>
          <ProductRowValue> {productValues.description}</ProductRowValue>
        </ProductRow>
        <ProductRow>
          <ProductRowName>Цена:</ProductRowName>
          <ProductRowValue> {productValues.price}</ProductRowValue>
        </ProductRow>
        <ProductRow>
          <ProductRowName>Жиры:</ProductRowName>
          <ProductRowValue> {productValues.fats}</ProductRowValue>
        </ProductRow>
        <ProductRow>
          <ProductRowName>Белки:</ProductRowName>
          <ProductRowValue> {productValues.proteins}</ProductRowValue>
        </ProductRow>
        <ProductRow>
          <ProductRowName>Углеводы:</ProductRowName>
          <ProductRowValue> {productValues.carbohydrates}</ProductRowValue>
        </ProductRow>
      </OrderList>

      <Buttons>
        <StyledButton margin="0 20px 0 0" onClick={() => onClickHandler()}>
          <ArrowBack /> На главную страницу
        </StyledButton>
      </Buttons>
    </>
  );
};

export default ProductTable;
