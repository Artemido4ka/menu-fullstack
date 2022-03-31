import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomizedDialogs from "./InfoProduct";

import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Title = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  background-color: rgba(77, 184, 157, 0.7);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  font-size: 20px;
  font-weight: 600;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Title} {
    opacity: 0;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  max-width: 200px;
  height: auto;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const redirectToProductHandler = () => {
    navigate(user ? `/product/${item.id}` : `/login`);
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Circle />
      <Image src={`http://localhost:5000/${item.image}`} />
      <Info>
        <Icon onClick={handleClickOpen}>
          <SearchOutlined />
        </Icon>
        <Icon onClick={() => redirectToProductHandler()}>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
      <Title>{item.title}</Title>
      {open ? <CustomizedDialogs handleOpen={setOpen} product={item} /> : null}
    </Container>
  );
};

export default Product;
