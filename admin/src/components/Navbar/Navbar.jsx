import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signout } from "../../redux/apiCalls/auth.api";

import { Avatar } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
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
