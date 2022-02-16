import styled from "styled-components";

const CardContiner = styled.div`
  position: relative;
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  line-height: 1.5;
  margin-bottom: 70px;
`;

const StyledSpan = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.95);
  color: #fff;
  border-radius: 50%;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
`;

const StyledImg = styled.img`
  width: 300px;
  max-width: none;
`;

const StyledTitle = styled.h1`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.95);
  margin: 0 0 0.5em 0;
  line-height: 1.1;
`;

const StyledHr = styled.hr`
  border: 0;
  height: 3px;
  width: 30px;
  background-color: #666;
  margin: 22px 0 20px;
`;

const StyledText = styled.p`
  margin: 0 0 1.5em 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  color: #fff;
  text-align: center;
  padding: 1.75em 3.5em;
  white-space: nowrap;
  border-radius: 5px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
`;

const StyledProductButton = styled(StyledButton)`
  position: absolute;
  bottom: -30px;
  right: 30px;
  background-color: #cf092c;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export {
  CardContiner,
  StyledSpan,
  StyledImg,
  StyledTitle,
  StyledHr,
  StyledText,
  StyledButton,
  StyledProductButton,
};
