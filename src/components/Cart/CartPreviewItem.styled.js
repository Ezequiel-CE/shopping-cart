import styled from "styled-components";

export const StyledConteinerPrev = styled.div`
  margin: 0 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyledPreviwImg = styled.img`
  width: 80px;
  height: 80px;
  max-height: 80px;
  max-width: 80px;
`;

export const StyledProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const StyledModi = styled.div`
  display: flex;
  gap: 20px;
  font-size: 23px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const StyledTextPrev = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 270px;
`;

export const StyledPricePrev = styled.p`
  margin: 0;
  padding: 0;
  font-size: 17px;
  font-weight: 600;
`;

export const StyledModificador = styled.div`
  cursor: pointer;
  font-size: 30px;
  color: #585858;
`;

export const StyledDelete = styled.div`
  position: absolute;
  right: 0;
  top: -15px;
  filter: invert(27%) sepia(7%) saturate(193%) hue-rotate(21deg) brightness(91%)
    contrast(93%);
  &:hover {
    cursor: pointer;
    filter: invert(0%) sepia(85%) saturate(7500%) hue-rotate(186deg)
      brightness(88%) contrast(112%);
  }
`;
