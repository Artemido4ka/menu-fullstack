import styled from "styled-components";
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
  background: rgba(24, 144, 150, 0.2);
  :nth-child(odd) {
    color: rgba(199, 136, 93, 1);
    background: rgba(24, 144, 150, 0.2);
  }
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
