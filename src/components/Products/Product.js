import React from "react";
import {
  CardContiner,
  StyledSpan,
  StyledImg,
  StyledTitle,
  StyledHr,
  StyledText,
  StyledProductButton,
} from "./Product.styled";

const Product = ({ data }) => {
  const { description, image, price, title } = data;
  return (
    <CardContiner>
      <StyledSpan>${price}</StyledSpan>
      <StyledImg src={image} alt="product" />
      <StyledTitle>{title}</StyledTitle>
      <StyledHr />
      <StyledText>{description}</StyledText>
      <StyledProductButton>Buy Now</StyledProductButton>
    </CardContiner>
  );
};

export default Product;
