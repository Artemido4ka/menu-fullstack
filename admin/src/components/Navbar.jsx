import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signout } from "../redux/apiCalls/auth.api";

import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";

const Container = styled.div`
  height: 60px;
  background-color: teal;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 1.3s;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  transition: 1.3s;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`;

const MenuItemText = styled.span`
  margin-right: 5px;
`;

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const signoutHandler = () => {
    dispatch(signout());
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Left>
            <Logo>Menu Admin panel</Logo>
          </Left>
        </Link>
        <Right>
          {user && (
            <>
              <MenuItem onClick={signoutHandler}>
                <MenuItemText>Logout </MenuItemText> <PowerSettingsNew />
              </MenuItem>
              <MenuItem>
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
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
