import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import defaultProduct from "../images/defaultProduct.jpg";

import { devices } from "../devices";

import styled from "styled-components";
import UserForm from "../components/UserForm";
import { fetchUserProfile, updateUser } from "../redux/apiCalls";

const UserContainer = styled.div`
  padding: 50px;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const AvatarContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;

  object-fit: cover;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const User = () => {
  const { isFetching, error, user } = useSelector((state) => state.user);
  const { image } = useSelector((state) => state.image);

  const dispatch = useDispatch();

  const handleForm = (userFormValues) => {
    updateUser(dispatch, userFormValues);
  };

  useEffect(() => {
    fetchUserProfile(dispatch);
  }, [dispatch]);

  const handleImageSrc = () => {
    if (image) return `http://localhost:5000/${image}`;
    if (user.avatar) return `http://localhost:5000/${user.avatar}`;
    return defaultProduct;
  };

  return (
    <>
      <Navbar />
      <UserContainer>
        <AvatarContainer>
          <Image src={handleImageSrc()} />
        </AvatarContainer>
        <InfoContainer>
          {!isFetching && user && (
            <UserForm
              userValues={user}
              handleForm={handleForm}
              loadedImage={image}
            />
          )}
        </InfoContainer>
      </UserContainer>
    </>
  );
};

export default User;
