import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import OrderForm from "../components/OrderForm";
import {
  deleteOrder,
  fetchOneOrder,
  updateOrder,
} from "../redux/apiCalls/order.api";
import { devices } from "../devices";

import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { ArrowBack, DeleteForever } from "@material-ui/icons";
import { BROWN, LIGHTGREEN, RED, SUPERLIGHTGREEN } from "../constants";

const OrderContainer = styled.div`
  padding: 50px;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const ImgContainer = styled.div`
  flex: 2;
  @media ${devices.tablet} {
    margin: 0 50px;
  }
`;

const OrderRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  background: ${SUPERLIGHTGREEN};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  color: black;
`;

export const Title = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 26px;
  color: black;

  border-bottom: 1px solid ${BROWN};
  border-top: 1px solid ${LIGHTGREEN};
`;

const Image = styled.img`
  max-width: 200px;
  height: auto;
`;

const InfoContainer = styled.div`
  flex: 3;
  @media ${devices.laptopL} {
    margin: 0px 50px;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Order = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const { isFetching, error, order } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const handleForm = (orderFormValues) => {
    updateOrder(dispatch, orderFormValues, orderId);
  };

  const handleDelete = () => {
    deleteOrder(dispatch, orderId);
    returnClickHandler();
  };

  let navigate = useNavigate();
  const returnClickHandler = () => {
    navigate("/orders");
  };

  useEffect(() => {
    fetchOneOrder(dispatch, orderId);
  }, [dispatch, orderId]);

  return (
    <>
      <Navbar />
      {!isFetching && order && (
        <OrderContainer>
          <ImgContainer>
            {order.products.map((product) => (
              <OrderRow key={product.id}>
                <Image src={`http://localhost:5000/${product.image}`} />
                <TitleContainer>
                  <Title>{product.title}</Title>
                </TitleContainer>
              </OrderRow>
            ))}
          </ImgContainer>
          <InfoContainer>
            <OrderForm orderValues={order} handleForm={handleForm} />

            <Buttons>
              <StyledButton
                margin="0 20px 0 0"
                onClick={() => returnClickHandler()}
              >
                <ArrowBack /> назад
              </StyledButton>
              <StyledButton background={RED} onClick={() => handleDelete()}>
                <DeleteForever />
                удалить
              </StyledButton>
            </Buttons>
          </InfoContainer>
        </OrderContainer>
      )}
    </>
  );
};

export default Order;
