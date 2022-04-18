import { useEffect, useState } from "react";

import { publicRequest } from "../../redux/requestMethods";
import Modal from "../Modal/Modal";
import ProductTable from "../ProductsTable";

import { ModalContainer, ModalTitle } from "./styled";

const RecommendationModal = ({ active, setActive }) => {
  const [products, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const user = localStorage.getItem("currentUser");

  useEffect(() => {
    const fetchRecommendation = async () => {
      setLoading(true);
      try {
        const userId = JSON.parse(user).id;
        const res = await publicRequest.get("recommendation/" + userId);
        setRecommendation(res.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRecommendation();
  }, [user]);

  console.log(products);

  return (
    <>
      {!error && !loading && (
        <Modal active={active} setActive={setActive}>
          <ModalContainer>
            <ModalTitle>Список рекомендуемых для вас блюд:</ModalTitle>
            <ProductTable products={products} />
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default RecommendationModal;
