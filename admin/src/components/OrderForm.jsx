import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { StyledButton } from "./StyledButton";
import { ArrowBack, Beenhere } from "@material-ui/icons";

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Form = styled.form``;

const validationSchema = yup.object({
  //   email: yup
  //     .string("Enter your email")
  //     .email("Enter a valid email")
  //     .required("Email is required"),
  //   password: yup
  //     .string("Enter your password")
  //     .min(8, "Password should be of minimum 8 characters length")
  //     .required("Password is required"),
});

const OrderForm = ({ handleForm, orderValues }) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/orders");
  };

  const formik = useFormik({
    initialValues: orderValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleForm(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="title"
        name="title"
        label="title"
        type="text"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        label="description"
        type="text"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />

      <TextField
        fullWidth
        id="price"
        name="price"
        label="price"
        type="text"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />

      <TextField
        fullWidth
        id="date"
        name="date"
        label="date"
        type="text"
        value={formik.values.date}
        onChange={formik.handleChange}
        error={formik.touched.date && Boolean(formik.errors.date)}
        helperText={formik.touched.date && formik.errors.date}
      />

      <TextField
        fullWidth
        id="status"
        name="status"
        label="status"
        type="text"
        value={formik.values.status}
        onChange={formik.handleChange}
        error={formik.touched.status && Boolean(formik.errors.status)}
        helperText={formik.touched.status && formik.errors.status}
      />
      <Buttons>
        <StyledButton margin="0 20px 0 0" onClick={() => onClickHandler()}>
          <ArrowBack /> Go back
        </StyledButton>

        <StyledButton type="submit" primary>
          <Beenhere />
          Submit
        </StyledButton>
      </Buttons>
    </Form>
  );
};

export default OrderForm;
