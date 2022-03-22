import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: center;
  background-color: rgba(197, 197, 197, 0.568);
`;

const Wrapper = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  height: 40px;
`;

const Textarea = styled.textarea``;

const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

const CashModal = ({ total, products, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [comment, setComment] = useState("");

  const handleClick = () => {
    createOrder({
      price: total,
      products,
      title: customer,
      description: comment,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>You will pay {total} BYN</Title>
        <Item>
          <Label>Student Name</Label>
          <Input
            placeholder="Billy Harringhton"
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </Item>
        <Item>
          <Label>Comment</Label>
          <Textarea
            rows={5}
            placeholder="faster please"
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
        </Item>
        <Button onClick={handleClick}>Order</Button>
      </Wrapper>
    </Container>
  );
};

export default CashModal;
