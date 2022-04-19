import styled from "styled-components";
import { devices } from "../../devices";

export const Container = styled.div`
  padding: 50px;

  @media ${devices.laptopL} {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

export const ProductInfoContainer = styled.div`
  flex: 3;
  @media ${devices.laptopL} {
    margin: 0px 50px;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid teal;
  padding: 20px;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const ImageWithAmmountContainer = styled.div`
  background-color: rgba(199, 136, 93, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;

  @media ${devices.laptopL} {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 0;
  }
`;

export const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
`;
