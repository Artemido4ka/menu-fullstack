import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { uploadImage } from "../redux/apiCalls/image.api";
import { StyledButton } from "./StyledButton";

import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

import { AddPhotoAlternate, ArrowBack, Beenhere } from "@material-ui/icons";

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

const UserForm = ({ loadedImage, handleForm, userValues }) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const formik = useFormik({
    initialValues: userValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let newValues = { ...values };
      if (loadedImage) newValues = { ...values, avatar: loadedImage };

      handleForm(newValues);
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="firstName"
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
          id="weight"
          name="weight"
          label="weight"
          type="number"
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />

        <TextField
          fullWidth
          id="height"
          name="height"
          label="height"
          type="number"
          value={formik.values.height}
          onChange={formik.handleChange}
          error={formik.touched.height && Boolean(formik.errors.height)}
          helperText={formik.touched.height && formik.errors.height}
        />

        <TextField
          fullWidth
          id="age"
          name="age"
          label="age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />

        <TextField
          fullWidth
          id="activity"
          name="activity"
          label="activity"
          type="number"
          value={formik.values.activity}
          onChange={formik.handleChange}
          error={formik.touched.activity && Boolean(formik.errors.activity)}
          helperText={formik.touched.activity && formik.errors.activity}
        />

        <TextField
          fullWidth
          id="sex"
          name="sex"
          label="sex"
          type="text"
          value={formik.values.sex}
          onChange={formik.handleChange}
          error={formik.touched.sex && Boolean(formik.errors.sex)}
          helperText={formik.touched.sex && formik.errors.sex}
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
          <AddPhotoAlternate /> Upload image
        </StyledButton>
      </>
    </>
  );
};

export default UserForm;
