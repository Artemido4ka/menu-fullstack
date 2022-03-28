import { Link } from "react-router-dom";

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

const SidebarContainer = styled.div`
  border: 0.5px solid rgb(230, 227, 227);
  height: 100%;
  background-color: white;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <List>
        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>

        <Link to="/products">
          <ListItem>
            <ListItemIcon>
              <ShoppingCartOutlined />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>

        <Link to="/orders">
          <ListItem>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <PersonOutline />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
