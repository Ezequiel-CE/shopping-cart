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
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { id, description, image, price, title } = data;

  return (
    <CardContiner>
      <StyledSpan>${price}</StyledSpan>
      <StyledImg src={image} alt="product" />
      <StyledTitle>{title}</StyledTitle>
      <StyledHr />
      <StyledText>{description}</StyledText>

      <Link to={`/products/${id}`} state={data}>
        <StyledProductButton>Buy Now</StyledProductButton>
      </Link>
    </CardContiner>
  );
};

export default Product;
