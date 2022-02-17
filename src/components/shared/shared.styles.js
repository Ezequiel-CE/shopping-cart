import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  background-color: #212529;
  color: #fffff8;
`;

export const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 300px;
  max-height: 400px;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.95);
  margin: 1em 0 0.5em 0;
  line-height: 1.1;
`;

export const StyledHr = styled.hr`
  border: 0;
  height: 3px;
  width: 30px;
  background-color: #666;
  margin: 22px 0 20px;
`;

export const StyledText = styled.p`
  margin: 0 0 1em 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled.button`
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
