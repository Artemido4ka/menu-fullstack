import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { uploadImage } from "../redux/apiCalls/image.api";
import { BLUE } from "../constants";
import { StyledButton } from "./StyledButton";

import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { AddPhotoAlternate, ArrowBack, Beenhere } from "@material-ui/icons";
import ActivityFormControl from "./ActivityFormControl";
import SexFormControl from "./SexFormControl";

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

        <SexFormControl formik={formik} />
        <ActivityFormControl formik={formik} />

        <Buttons>
          <StyledButton margin="0 20px 0 0" onClick={() => onClickHandler()}>
            <ArrowBack /> на главную страницу
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
          background={BLUE}
        >
          <AddPhotoAlternate /> загрузить изображение
        </StyledButton>
      </>
    </>
  );
};

export default UserForm;
