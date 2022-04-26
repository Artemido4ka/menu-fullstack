import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { ArrowBack } from "@material-ui/icons";
import { StyledButton } from "../components/StyledButton";
import { getAllUsers } from "../redux/apiCalls/user.api";
import AllUsersTable from "../components/AllUsersTable";

const AllUsersContainer = styled.div`
  display: flex;
`;

const AllUsersWrapper = styled.div`
  flex: 6;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const AllUsers = () => {
  const dispatch = useDispatch();
  const { isFetching, error, users } = useSelector((state) => state.user);

  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);

  return (
    <AllUsersContainer>
      <AllUsersWrapper>
        <ButtonContainer>
          <Link to={`/`}>
            <StyledButton margin="0 20px 0 0">
              <ArrowBack />
              на главную страницу
            </StyledButton>
          </Link>
        </ButtonContainer>
        <AllUsersTable users={users} />
      </AllUsersWrapper>
    </AllUsersContainer>
  );
};

export default AllUsers;
