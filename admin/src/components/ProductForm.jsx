import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

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

const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      fats: "",
      proteins: "",
      carbohydrates: "",
      price: "",
      weight: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
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
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.email && formik.errors.email}
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
          id="fats"
          name="fats"
          label="fats"
          type="text"
          value={formik.values.fats}
          onChange={formik.handleChange}
          error={formik.touched.fats && Boolean(formik.errors.fats)}
          helperText={formik.touched.fats && formik.errors.fats}
        />
        <TextField
          fullWidth
          id="proteins"
          name="proteins"
          label="proteins"
          type="text"
          value={formik.values.proteins}
          onChange={formik.handleChange}
          error={formik.touched.proteins && Boolean(formik.errors.proteins)}
          helperText={formik.touched.proteins && formik.errors.proteins}
        />
        <TextField
          fullWidth
          id="carbohydrates"
          name="carbohydrates"
          label="carbohydrates"
          type="text"
          value={formik.values.carbohydrates}
          onChange={formik.handleChange}
          error={
            formik.touched.carbohydrates && Boolean(formik.errors.carbohydrates)
          }
          helperText={
            formik.touched.carbohydrates && formik.errors.carbohydrates
          }
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
          id="weight"
          name="weight"
          label="weight"
          type="text"
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />

        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="file">
            <Input
              accept="image/*"
              id="file"
              multiple
              type="file"
              onChange={formik.handleChange}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Stack>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ProductForm;
