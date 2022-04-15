import { useSpring, animated } from "react-spring";
import { useRef } from "react";
import styled from "styled-components";

const Modal = ({ active, setActive, children }) => {
  const ModalContainer = styled.div`
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

  const ModalContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: white;

    width: 50vw;
  `;

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: active ? 1 : 0,
    transform: active ? `translateY(0%)` : `translateY(-100%)`,
  });

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setActive(false);
    }
  };
  return (
    <>
      {active && (
        <ModalContainer onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalContent>{children}</ModalContent>
          </animated.div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
