import styled from "styled-components";

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
  background: rgba(199, 136, 93, 0.1);
  color: rgba(24, 144, 150, 1);
  font-size: 16px;
  padding: 10px;
  :nth-child(odd) {
    color: rgba(199, 136, 93, 1);
    background: rgba(24, 144, 150, 0.2);
  }
`;

export const ProductRowName = styled.div`
  margin-right: 10px;
`;
export const ProductRowValue = styled.div`
  color: black;
`;
