import styled from "styled-components";
import { BROWN, LIGHTBROWN, LIGHTGREEN, SUPERLIGHTGREEN } from "../../constants";

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;


export const OrderList = styled.div`
  overflow: hidden;
  border-radius: 5px;
`;

export const OrderRow = styled.div`
  display: flex;
  background: ${LIGHTBROWN};
  color: ${LIGHTGREEN};
  font-size: 16px;
  padding: 10px;
  :nth-child(odd) {
    color: ${BROWN};
    background: ${SUPERLIGHTGREEN};
  }
`;

export const OrderRowName = styled.div`
  margin-right: 10px;
`;
export const OrderRowValue = styled.div`
  color: black;
`;
