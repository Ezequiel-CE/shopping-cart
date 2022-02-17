import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  StyledImg,
  StyledTitle,
  StyledText,
  StyledHr,
} from "../shared/shared.styles";
import {
  StyledContainer,
  StyledTextContainer,
  StyledPrice,
  StyledDetailButton,
  StyledSelect,
  StyledDescriptionTag,
  StyledCart,
} from "./Details.styled";
import cartLogo from "../../assets/cart.svg";

const ProductDetail = ({ addTocart }) => {
  const [amount, setAmount] = useState(1);

  const handleOptions = (e) => {
    const option = e.target.value;
    setAmount(Number(option));
  };

  const { state } = useLocation();
  const { category, description, image, price, title } = state;
  return (
    <StyledContainer>
      <StyledDescriptionTag>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </StyledDescriptionTag>
      <StyledImg src={image} alt="product" />
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledPrice>${price}</StyledPrice>
        <StyledText>{description}</StyledText>
        <StyledHr />
        <StyledSelect onChange={handleOptions}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </StyledSelect>
        <StyledDetailButton onClick={() => addTocart(state, amount)}>
          Add to cart <StyledCart src={cartLogo} alt="add-to-cart" />
        </StyledDetailButton>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default ProductDetail;
