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

const Product = () => {
  return (
    <CardContiner>
      <StyledSpan>$120</StyledSpan>
      <StyledImg
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
        alt="product"
      />
      <StyledTitle className="product__title">Nike Roshe Run Print</StyledTitle>
      <StyledHr />
      <StyledText>
        The Nike Roshe One Print Men's Shoe offers breathability, lightweight
        cushioning and bold style with an injected unit midsole and colorful
        mesh upper.
      </StyledText>
      <StyledProductButton>Buy Now</StyledProductButton>
    </CardContiner>
  );
};

export default Product;
