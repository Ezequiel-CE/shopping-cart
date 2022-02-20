import styled from "styled-components";
import brickImg from "../../assets/brick-back.jpg";

export const ProductContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  background-image: url(${brickImg});
`;

export const SpinerContainerStyle = styled.div`
  height: 80vh;
  display: grid;
  place-items: center;
`;
