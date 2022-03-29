import styled from "styled-components";

export const StyledNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5px;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 15px;
  transition: all 0.5s ease-out;
  :hover {
    opacity: 0.3;
  }
`;
