import styled from "styled-components";
import { StyledButton } from "../shared/shared.styles";

export const StyledContainer = styled.div`
  width: 80%;
  padding: 50px;
  margin: 50px auto 0 auto;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  position: relative;
`;

export const StyledTextContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledPrice = styled.h2`
  color: #aaa;
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const StyledDetailButton = styled(StyledButton)`
  margin-top: 20px;
  background-color: #cf092c;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  cursor: pointer;
  margin-bottom: 20px;
  width: 200px;
  padding: 12px 92px 12px 15px;
  background-color: #f0f0f0;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const StyledDescriptionTag = styled.span`
  position: absolute;
  top: -10px;
  left: -20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 8px;
  font-size: 15px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  font-weight: 700;
`;
