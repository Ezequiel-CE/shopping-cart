import styled from "styled-components";
import homeImg from "../assets/bakc2Ff.jpg";

import { StyledButton } from "../components/shared/shared.styles";

export const StyledContainerHome = styled.div`
  width: 80%;
  height: 70%;
  margin: 100px auto 0 auto;
  background-color: #303131;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  position: relative;
  background-image: url(${homeImg});
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(53%);
  -webkit-filter: grayscale(53%);
  -moz-filter: grayscale(53%);
`;

export const StyledTittle = styled.h1`
  top: 200px;
  left: 30px;
  width: 500px;
  height: 150px;
  color: white;
  filter: none;
`;

export const StyledTextArea = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHomeButton = styled(StyledButton)`
  margin-top: 20px;
  background-color: #cf092c;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 18px;
`;
