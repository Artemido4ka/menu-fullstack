import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import defaultProduct from "../images/defaultProduct.jpg";

import { devices } from "../devices";

import styled from "styled-components";
import UserForm from "../components/UserForm";
import {
  fetchSubUserProfile,
  fetchUserProfile,
  updateSubUser,
  updateUser,
} from "../redux/apiCalls/user.api";
import { useLocation } from "react-router-dom";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  margin: 40px 0;
  padding: 40px;
  width: 50%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(24, 144, 150, 1), rgba(24, 144, 150, 0.5));
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 10%;
  width: 300px;
  height: auto;
`;

const InfoContainer = styled.div`
  /* flex: 1; */
  padding: 0px 50px;
`;

const SubUser = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const { isFetching, error, subUser } = useSelector((state) => state.user);
  const { image } = useSelector((state) => state.image);

  const dispatch = useDispatch();

  const handleForm = (userFormValues) => {
    updateSubUser(dispatch, userFormValues);
  };

  useEffect(() => {
    fetchSubUserProfile(dispatch, userId);
  }, [dispatch, userId]);

  const handleImageSrc = () => {
    if (image) return `http://localhost:5000/${image}`;
    if (subUser.avatar) return `http://localhost:5000/${subUser.avatar}`;
    return defaultProduct;
  };

  return (
    <>
      <Navbar />
      {!isFetching && subUser && (
        <UserContainer>
          <AvatarContainer>
            <Image src={handleImageSrc()} />
          </AvatarContainer>
          <InfoContainer>
            <UserForm
              userValues={subUser}
              handleForm={handleForm}
              loadedImage={image}
            />
          </InfoContainer>
        </UserContainer>
      )}
    </>
  );
};

export default SubUser;
