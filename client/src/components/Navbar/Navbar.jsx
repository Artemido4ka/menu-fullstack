import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signout } from "../../redux/apiCalls/auth.api";

import { Avatar, Badge } from "@material-ui/core";
import {
  Chat,
  EmojiObjects,
  Fastfood,
  PowerSettingsNew,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import RecommendationModal from "../RecommendationModal/RecommendationModal";
import {
  Container,
  Left,
  Logo,
  MenuItem,
  MenuItemText,
  Right,
  Wrapper,
} from "./styled";

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { user } = useSelector((state) => state.user);
  let navigate = useNavigate();

  const signoutHandler = () => {
    dispatch(signout());
    navigate("/");
  };
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/">
            <Left>
              <Logo>Меню</Logo>
            </Left>
          </Link>
          <Right>
            {user ? (
              <>
                <Link to="/chat">
                  <MenuItem>
                    <MenuItemText>чат </MenuItemText>
                    <Chat />
                  </MenuItem>
                </Link>

                <Link to="/orders">
                  <MenuItem>
                    <MenuItemText>заказы </MenuItemText>
                    <Fastfood />
                  </MenuItem>
                </Link>

                <MenuItem onClick={openModal}>
                  <MenuItemText>рекомендация </MenuItemText>
                  <EmojiObjects />
                </MenuItem>

                <MenuItem onClick={signoutHandler}>
                  <MenuItemText>выйти </MenuItemText>
                  <PowerSettingsNew />
                </MenuItem>
                <Link to={`/users/${user.id}`}>
                  <MenuItem>
                    <Avatar
                      alt="avatar"
                      src={
                        user.avatar
                          ? `http://localhost:5000/${user.avatar}`
                          : null
                      }
                    />
                  </MenuItem>
                </Link>
              </>
            ) : (
              <>
                <Link to="/register">
                  <MenuItem>Регистрация</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem>Войти</MenuItem>
                </Link>
              </>
            )}

            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>

      <RecommendationModal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Navbar;
