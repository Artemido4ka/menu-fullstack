import { KeyboardArrowUp } from "@material-ui/icons";
import { PersonOutlined } from "@material-ui/icons";
import { AccountBalanceWalletOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { MonetizationOnOutlined } from "@material-ui/icons";

import styled from "styled-components";

const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(160, 160, 160);
`;

const Counter = styled.span`
  font-size: 28px;
  font-weight: 300;
`;

const Link = styled.span`
  width: max-content;
  font-size: 12px;
  border-bottom: 1px solid gray;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Percentage = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  &.positive {
    color: green;
  }
  &.negative {
    color: red;
  }
`;

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <WidgetContainer>
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {data.isMoney && "$"} {amount}
        </Counter>
        <Link>{data.link}</Link>
      </Left>
      <Right>
        <Percentage>
          <KeyboardArrowUp />
          {diff} %
        </Percentage>
        {data.icon}
      </Right>
    </WidgetContainer>
  );
};

export default Widget;
