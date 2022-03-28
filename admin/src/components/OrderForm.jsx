import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { createProduct, uploadImage } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Input = styled.input`
  display: none;
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

const OrderForm = ({ loadedImage, handleForm, productValues }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: productValues
      ? productValues
      : {
          title: "",
          description: "",
          price: "",
          date: "",
          status: "",
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // let newForm = values;
      // if (loadedImage) {
      //   newForm = Object.fromEntries(
      //     Object.entries(values).filter((n) => n[0] !== "image")
      //   );
      //   newForm.image = loadedImage;
      // }

      handleForm(values);
    },
  });

  return (
    <>
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
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
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

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default OrderForm;
