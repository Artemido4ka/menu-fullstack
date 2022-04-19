import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

export const ModalContentWrapper = styled.div`
  padding: 30px;
  border-radius: 12px;
  background-color: white;
  position: relative;

  width: 50vw;
`;

export const ButtonClose = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;
`;
