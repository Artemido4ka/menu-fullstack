import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";
import WidgetUsers from "../components/Widgets/WidgetUsers";
import WidgetOrders from "../components/Widgets/WidgetOrders";
import WidgetEarnings from "../components/Widgets/WidgetEarnings";
import WidgetProducts from "../components/Widgets/WidgetProducts";
import { devices } from "../devices";

const HomeContainer = styled.div`
  display: flex;
`;
const HomeWrapper = styled.div`
  /* display: flex; */
  justify-content: space-between;
  padding: 20px;
  @media ${devices.laptop} {
    display: flex;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <Sidebar />
        <HomeWrapper>
          <WidgetUsers />
          <WidgetOrders />
          <WidgetProducts />
          <WidgetEarnings />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
