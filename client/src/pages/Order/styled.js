import styled from "styled-components";
import { BROWN, LIGHTGREEN, SUPERLIGHTGREEN } from "../../constants";
import { devices } from "../../devices";

export const OrderContainer = styled.div`
  padding: 50px;

  @media ${devices.tablet} {
    display: flex;
  }
`;

export const ProductsContainer = styled.div`
  flex: 2;
  @media ${devices.tablet} {
    margin: 0 50px;
  }
`;

export const ProductRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  background: ${SUPERLIGHTGREEN};
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  color: black;
`;

export const ProductTitle = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 26px;
  color: black;
  border-bottom: 1px solid ${BROWN};
  border-top: 1px solid ${LIGHTGREEN};
`;

export const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
`;

export const InfoContainer = styled.div`
  flex: 3;
  @media ${devices.laptopL} {
    margin: 0px 50px;
  }
`;
