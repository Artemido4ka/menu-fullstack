import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background-color: teal;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Logo = styled.h1`
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 1.3s;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  transition: 1.3s;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`;

export const MenuItemText = styled.span`
  margin-right: 5px;
`;
