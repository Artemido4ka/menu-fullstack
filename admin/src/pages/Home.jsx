import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const HomeContainer = styled.div`
  display: flex;
`;
const HomeWrapper = styled.div`
  flex: 6;
`;
const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
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
