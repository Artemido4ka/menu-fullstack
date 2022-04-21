import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const HomeContainer = styled.div`
  display: flex;
  /* @media (max-width: 1200px) {
    flex-direction: "column";
    display: none;
  } */
  /* @media (max-width: 1200px) {
    display: block;
  } */
`;
const HomeWrapper = styled.div`
  flex: 6;
`;

const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;

  @media (max-width: 760px) {
    display: block;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <Sidebar />
        <HomeWrapper>
          <Widgets>
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </Widgets>
        </HomeWrapper>
      </HomeContainer>
    </>

    // <div>
    //   <Navbar />
    //   <Footer />
    // </div>
  );
};

export default Home;
