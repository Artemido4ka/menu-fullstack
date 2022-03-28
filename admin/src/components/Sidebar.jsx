import { Dashboard } from "@material-ui/icons";
import { PersonOutline } from "@material-ui/icons";
import { CreditCard } from "@material-ui/icons";
import { Store } from "@material-ui/icons";
import { ExitToApp } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import styled from "styled-components";
// import { DarkModeContext } from "../../context/darkModeContext";

const SidebarContainer = styled.div`
  width: 12%;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
`;

const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #6439ff;
`;

const Center = styled.div`
  padding-left: 10px;
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #7451f8;
  cursor: pointer;
  margin: 5px;

  &:nth-child(1) {
    background-color: whitesmoke;
  }
  &:nth-child(2) {
    background-color: #333;
  }
  &:nth-child(3) {
    background-color: darkblue;
  }
`;

const Sidebar = () => {
  //   const { dispatch } = useContext(DarkModeContext);
  return (
    <SidebarContainer>
      <Top>
        <Link to="/">
          <Logo>Navigation Panel</Logo>
        </Link>
      </Top>
      <hr />
      <Center>
        <List>
          <Title>MAIN</Title>

          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Dashboard" />
                <Dashboard />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/products">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Products" />
                <ShoppingCartOutlined />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/orders">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Orders" />
                <Store />
              </ListItemButton>
            </ListItem>
          </Link>

          <Title>USEFUL</Title>

          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Stats" />
                <CreditCard />
              </ListItemButton>
            </ListItem>
          </Link>

          <Title>USER</Title>

          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Profile" />
                <PersonOutline />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Logout" />
                <ExitToApp />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Center>
      <Bottom>
        <ColorOption

        //   onClick={() => dispatch({ type: "LIGHT" })}
        ></ColorOption>
        <ColorOption

        //   onClick={() => dispatch({ type: "DARK" })}
        ></ColorOption>
      </Bottom>
    </SidebarContainer>
  );
};

export default Sidebar;
