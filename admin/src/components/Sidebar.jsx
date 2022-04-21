import { Link, useNavigate } from "react-router-dom";

import { Dashboard } from "@material-ui/icons";
import { PersonOutline } from "@material-ui/icons";
import { Store } from "@material-ui/icons";
import { ExitToApp } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signout } from "../redux/apiCalls/auth.api";

const SidebarContainer = styled.div`
  border: 0.5px solid rgb(230, 227, 227);
  height: 100%;
  background-color: white;
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const signoutHandler = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <SidebarContainer>
      <List>
        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
        </Link>

        <Link to="/products">
          <ListItem>
            <ListItemIcon>
              <ShoppingCartOutlined />
            </ListItemIcon>
            <ListItemText primary="Блюда" />
          </ListItem>
        </Link>

        <Link to="/orders">
          <ListItem>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Заказы" />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <PersonOutline />
            </ListItemIcon>
            <ListItemText primary="Пользователи" />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem onClick={signoutHandler}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Выйти" />
          </ListItem>
        </Link>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
