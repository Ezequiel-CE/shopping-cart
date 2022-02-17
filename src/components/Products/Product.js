import React from "react";
import {
  CardContiner,
  StyledSpan,
  StyledProductButton,
} from "./Product.styled";
import { Link } from "react-router-dom";
import { StyledImg, StyledTitle } from "../shared/shared.styles";

const Product = ({ data }) => {
  const { id, image, price, title } = data;

  return (
    <CardContiner>
      <StyledSpan>${price}</StyledSpan>
      <StyledImg src={image} alt="product" />
      <StyledTitle>{title}</StyledTitle>
      <Link to={`/products/${id}`} state={data}>
        <StyledProductButton>Buy Now</StyledProductButton>
      </Link>
    </CardContiner>
  );
};

export default Product;
