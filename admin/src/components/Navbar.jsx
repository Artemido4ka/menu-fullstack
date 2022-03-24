import { Avatar, Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../redux/apiCalls";
// import { signout } from "../redux/apiCalls";
// import { mobile } from "../responsive";

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
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
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
            <Logo>Menu.</Logo>
          </Left>
        </Link>
        <Right>
          {user && (
            <>
              <MenuItem onClick={signoutHandler}>Logout</MenuItem>
              <MenuItem>
                <Avatar alt="avatar" src={user.image ? user.image : null} />
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
