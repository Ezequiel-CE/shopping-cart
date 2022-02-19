import styled from "styled-components";
import { StyledButton } from "../shared/shared.styles";

export const CartTitleStyled = styled.h2`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const StyledCartButton = styled(StyledButton)`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #cf092c;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 18px;
  padding: 20px 40px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledTotal = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const StyledAlert = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
`;
