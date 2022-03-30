import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  /* margin-right: 20px; */
  margin: ${(props) => (props.margin ? `${props.margin}` : "none")};
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  background: rgba(75, 15, 125, 0.7);
  color: "white";
  background: ${(props) => (props.primary ? "teal" : "rgba(75, 15, 125, 0.7)")};
  background: ${(props) => props.background};
  color: ${(props) => (props.primary ? "white" : "white")};
  height: 35px;

  border-radius: 3px;
  transition: all 0.5s ease-out;
  cursor: pointer;

  :hover {
    background: ${(props) =>
      props.primary ? "rgba(75, 15, 125, 0.7)" : "teal"};
  }
`;
