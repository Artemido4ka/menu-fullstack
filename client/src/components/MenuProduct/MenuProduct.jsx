import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal/Modal";
import ProductTable from "../ProductTable/ProductTable";

import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Circle, Container, Icon, Image, Info, Title } from "./styled";

const MenuProduct = ({ product }) => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const redirectToProductHandler = () => {
    navigate(user ? `/product/${product.id}` : `/login`);
  };

  const [modalActive, setModalActive] = useState(false);
  const openModal = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <Container>
      <Circle />
      <Image src={`http://localhost:5000/${product.image}`} />
      <Info>
        <Icon onClick={openModal}>
          <SearchOutlined />
        </Icon>
        <Icon onClick={() => redirectToProductHandler()}>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
      <Title>{product.title}</Title>

      <Modal active={modalActive} setActive={setModalActive}>
        <ProductTable productValues={product} isButtonHidden={true} />
      </Modal>
    </Container>
  );
};

export default MenuProduct;
