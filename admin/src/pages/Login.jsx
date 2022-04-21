import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../redux/apiCalls/auth.api";
import { devices } from "../devices";

import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { Beenhere } from "@material-ui/icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(24, 144, 150, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 75%;
  padding: 20px;
  background-color: white;
  @media ${devices.tablet} {
    width: 40%;
  }
  @media ${devices.laptopL} {
    width: 30%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreateAccountLink = styled.div`
  font-size: 16px;
  color: black;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const { isFetching, error, user } = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(dispatch, values);
    },
  });

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <StyledButton type="submit" primary margin="20px 0">
            <Beenhere />
            Войти
          </StyledButton>
          {error && <Error>Something is wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
