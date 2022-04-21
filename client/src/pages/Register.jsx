import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registrate } from "../redux/apiCalls/auth.api";
import { devices } from "../devices";

import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { Beenhere } from "@material-ui/icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(199, 136, 93, 0.5),
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

const Error = styled.span`
  color: red;
`;

const validationSchema = yup.object({
  firstName: yup.string("Enter your name").required("Name is required"),
  lastName: yup.string("Enter your SurName").required("SurName is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is required"),
});

const Register = () => {
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      registrate(dispatch, values);
    },
  });

  return (
    <Container>
      <Wrapper>
        <Title>Создать аккаунт</Title>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="firstName"
            label="name"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />

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
          <TextField
            fullWidth
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="passwordConfirmation"
            type="password"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
          />

          <StyledButton type="submit" primary margin="20px 0">
            <Beenhere />
            Создать
          </StyledButton>
          {error && <Error>Something is wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
