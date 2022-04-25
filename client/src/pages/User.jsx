import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import defaultProduct from "../images/defaultProduct.jpg";

import { devices } from "../devices";

import styled from "styled-components";
import UserForm from "../components/UserForm";
import { fetchUserProfile, updateUser } from "../redux/apiCalls/user.api";
import Footer from "../components/Footer";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
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
      <Footer />
    </>
  );
};

export default User;
