import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { uploadImage } from "../redux/apiCalls/image.api";

import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { AddPhotoAlternate, ArrowBack, Beenhere } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  display: none;
`;

const Form = styled.form``;

const Buttons = styled.div`
  display: flex;
  margin: 20px 0;
`;

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

const ProductForm = ({ loadedImage, handleForm, productValues }) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/products");
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const formik = useFormik({
    initialValues: productValues
      ? productValues
      : {
          title: "",
          description: "",
          fats: 0,
          proteins: 0,
          carbohydrates: 0,
          price: 0,
          weight: 0,
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let newValues = { ...values };
      if (loadedImage) newValues = { ...values, image: loadedImage };
      handleForm(newValues);
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
          helperText={formik.touched.title && formik.errors.title}
        />

        <TextField
          fullWidth
          id="description"
          name="description"
          label="description"
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
          type="number"
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
          type="number"
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
          type="number"
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
          type="number"
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
          type="number"
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />
        <Buttons>
          <StyledButton margin="0 20px 0 0" onClick={() => onClickHandler()}>
            <ArrowBack /> назад
          </StyledButton>
          <StyledButton type="submit" primary>
            <Beenhere />
            сохранить
          </StyledButton>
        </Buttons>
      </Form>

      <>
        <Input
          accept="image/*"
          ref={hiddenFileInput}
          type="file"
          onChange={(event) => uploadImage(dispatch, event.target.files[0])}
        />

        <StyledButton
          margin="0 20px 0 0"
          onClick={handleClick}
          background="rgba(23, 35, 143, 0.8);"
        >
          <AddPhotoAlternate /> загрузить фото
        </StyledButton>
      </>
    </>
  );
};

export default ProductForm;
