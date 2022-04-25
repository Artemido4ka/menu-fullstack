import styled from "styled-components";
import { PURPLE } from "../constants";

export const StyledButton = styled.button`
  display: flex;
  margin: ${(props) => (props.margin ? `${props.margin}` : "none")};
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  background: ${PURPLE};
  color: "white";
  background: ${(props) => (props.primary ? "teal" : `${PURPLE}`)};
  background: ${(props) => props.background};
  color: ${(props) => (props.primary ? "white" : "white")};
  height: 35px;

  border-radius: 3px;
  transition: all 0.5s ease-out;
  cursor: pointer;

  :hover {
    background: ${(props) => (props.primary ? `${PURPLE}` : "teal")};
  }
`;
