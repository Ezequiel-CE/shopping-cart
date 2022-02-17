import styled from "styled-components";

export const StyledCart = styled.div`
  background-color: white;
  position: relative;
  padding: 10px;
  border-radius: 50%;
  margin-left: 80px;
  transition: transform 0.15s ease-in-out 0s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StyledNumber = styled.div`
  position: absolute;
  background-color: red;
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 12px;
  bottom: -10px;
  left: -5px;
`;
