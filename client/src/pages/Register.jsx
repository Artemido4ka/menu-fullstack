import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrate } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setName] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  let navigate = useNavigate();


  const handleRegistrationClick = (e) => {
    e.preventDefault();
    registrate(dispatch, { firstName, lastName, password, email });
    if (!error) {
      navigate("/login");
    }
    console.log("SOMETHING");
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password" />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegistrationClick} disabled={isFetching}>
            CREATE
          </Button>
          {error && <Error>Something is wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
