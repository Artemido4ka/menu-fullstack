import { useSpring, animated } from "react-spring";
import { useRef } from "react";

import { Close } from "@material-ui/icons";
import { ButtonClose, ModalContainer, ModalContentWrapper } from "./styled";

const Modal = ({ active, setActive, children }) => {
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
            <ModalContentWrapper>
              <ButtonClose onClick={() => setActive((prev) => !prev)}>
                <Close />
              </ButtonClose>
              {children}
            </ModalContentWrapper>
          </animated.div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
