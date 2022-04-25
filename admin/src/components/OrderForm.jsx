import { useFormik } from "formik";
import * as yup from "yup";

import { StyledButton } from "./StyledButton";

import TextField from "@material-ui/core/TextField";
import { Beenhere } from "@material-ui/icons";
import StatusFormControl from "./StatusFormControl";

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
  const formik = useFormik({
    initialValues: orderValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleForm(values);
    },
  });

  return (
    <form
      // sx={{ width: "100%" }}
      // variant="standard"
      onSubmit={formik.handleSubmit}
    >
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

      <StatusFormControl formik={formik} />

      <StyledButton margin="20px 0" type="submit" primary>
        <Beenhere />
        сохранить
      </StyledButton>
    </form>
  );
};

export default OrderForm;
