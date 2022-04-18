import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CashModal from "../../components/CashModal/CashModal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { changeProductQuantity } from "../../redux/cartSlice";

import { Add, ArrowBack, Beenhere, Remove } from "@material-ui/icons";
import { StyledButton } from "../../components/StyledButton";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
} from "./styled";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);
  const openModal = () => {
    setModalActive((prev) => !prev);
  };

  const handleQuantity = (type, product) => {
    let priceDiff = 0;
    let newQuantity = product.quantity;
    if (type === "dec") {
      product.quantity > 1 &&
        (newQuantity = product.quantity - 1) &&
        (priceDiff = -product.price);
    } else {
      newQuantity = product.quantity + 1;
      priceDiff = +product.price;
    }
    console.log(newQuantity, priceDiff);
    dispatch(changeProductQuantity({ ...product, newQuantity, priceDiff }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Корзина</Title>
        <Top>
          <Link to={`/`}>
            <StyledButton>
              <ArrowBack />
              На главную страницу
            </StyledButton>
          </Link>
          <TopTexts>
            <TopText>Количество: {quantity}</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={`http://localhost:5000/${product.image}`} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleQuantity("inc", product)} />
                    <ProductAmount> {product.quantity}</ProductAmount>
                    <Remove onClick={() => handleQuantity("dec", product)} />
                  </ProductAmountContainer>

                  <ProductPrice>
                    {Number((product.price * product.quantity).toFixed(2))} р.
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>Счёт</SummaryTitle>

            <SummaryItem type="total">
              <SummaryItemText>Итого:</SummaryItemText>
              <SummaryItemPrice>{cart.totalPrice} Руб.</SummaryItemPrice>
            </SummaryItem>

            <StyledButton onClick={openModal} type="submit" primary>
              <Beenhere />
              Оформить
            </StyledButton>
          </Summary>
        </Bottom>

        <CashModal
          total={cart.totalPrice}
          products={cart.products}
          active={modalActive}
          setActive={setModalActive}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
