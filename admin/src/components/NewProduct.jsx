import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { Close } from "@material-ui/icons";

import { styled as styles } from "@mui/material/styles";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import defaultProduct from "../images/defaultProduct.jpg";
import { createProduct } from "../redux/apiCalls";
import ProductForm from "./ProductForm";

const Container = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const BootstrapDialog = styles(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function NewProduct({ handleOpen }) {
  const dispatch = useDispatch();
  const { isFetching, error, image } = useSelector((state) => state.image);
  const handleClose = () => {
    handleOpen(false);
  };

  const handleForm = (formValues) => {
    createProduct(dispatch, formValues);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container>
            <ImgContainer>
              <Image
                src={image ? `http://localhost:5000/${image}` : defaultProduct}
              />
            </ImgContainer>
            <InfoContainer>
              <ProductForm loadedImage={image} handleForm={handleForm} />
            </InfoContainer>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Закрыть
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
