import { Add, Beenhere, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { fetchOneProduct } from "../../redux/apiCalls/product.api";
import { addProduct } from "../../redux/cartSlice";

import { StyledButton } from "../../components/StyledButton";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  AddContainer,
  AmountContainer,
  Amount,
} from "./styled";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const { isFetching, error, product } = useSelector((state) => state.product);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOneProduct(dispatch, productId);
  }, [dispatch, productId]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCartClick = () => {
    dispatch(addProduct({ ...product, quantity }));
    setQuantity(1);
  };

  return (
    <Container>
      <Navbar />
      {!isFetching && product && (
        <Wrapper>
          <ImgContainer>
            <Image src={`http://localhost:5000/${product.image}`} />
          </ImgContainer>
          <InfoContainer>
            <Title> {product.title}</Title>
            <Desc>{product.description}</Desc>
            <Price> {product.price} Руб.</Price>

            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <StyledButton onClick={handleAddToCartClick} primary>
                <Beenhere />
                Добавить в корзину
              </StyledButton>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}

      <Footer />
    </Container>
  );
};

export default Product;
