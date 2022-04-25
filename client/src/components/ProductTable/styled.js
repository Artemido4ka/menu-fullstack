import styled from "styled-components";
import { BROWN, LIGHTBROWN, SUPERLIGHTGREEN } from "../../constants";

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const OrderList = styled.div`
  overflow: hidden;
  border-radius: 5px;
`;

export const ProductRow = styled.div`
  display: flex;
  background: ${LIGHTBROWN};
  color: rgba(24, 144, 150, 1);
  font-size: 16px;
  padding: 10px;
  :nth-child(odd) {
    color: ${BROWN};
    background: ${SUPERLIGHTGREEN};
  }
`;

export const ProductRowName = styled.div`
  margin-right: 10px;
`;
export const ProductRowValue = styled.div`
  color: black;
`;
