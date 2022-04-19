import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../../redux/apiCalls/order.api";
import Modal from "../Modal/Modal";
import { StyledButton } from "../StyledButton";

import { Beenhere } from "@material-ui/icons";
import { Container, Title, Item, Label, Input, Textarea } from "./styled";

const CashModal = ({
  total,
  products,

  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState("");
  const [comment, setComment] = useState("");
  const order = useSelector((state) => state.order);

  const handleClick = () => {
    createOrder(dispatch, {
      price: total,
      products,
      title: customer,
      description: comment,
    });
  };

  return (
    <>
      {/* {!order && !order && ( */}
      <Modal active={active} setActive={setActive}>
        <Container>
          <Title>Полная стоимость: {total} BYN</Title>
          <Item>
            <Label>Имя</Label>
            <Input
              placeholder="Иван Темнохолмов"
              type="text"
              onChange={(e) => setCustomer(e.target.value)}
            />
          </Item>
          <Item>
            <Label>Комментарий к заказу</Label>
            <Textarea
              rows={5}
              placeholder="Комментарий к заказу"
              type="text"
              onChange={(e) => setComment(e.target.value)}
            />
          </Item>
          <StyledButton onClick={handleClick} type="submit" primary>
            <Beenhere />
            Заказать
          </StyledButton>
        </Container>
      </Modal>
      {/* )} */}
    </>
  );
};

export default CashModal;
