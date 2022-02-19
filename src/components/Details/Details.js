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

const ProductDetail = ({ products, setShoppingCart }) => {
  const [amount, setAmount] = useState(1);
  const { state } = useLocation();
  const { category, description, image, price, title } = state;

  const handleOptions = (e) => {
    const option = e.target.value;
    setAmount(Number(option));
  };

  const addTocart = (data, amount) => {
    const repeated = products.some((item) => item.id === data.id);

    if (repeated) {
      //create a copy for the state and update the state width the copy;
      const repeateELIndex = products.findIndex((item) => item.id === data.id);
      const copy = [...products];
      copy[repeateELIndex].amount += amount;
      setShoppingCart(copy);
    } else {
      setShoppingCart([...products, { id: data.id, item: data, amount }]);
    }
  };
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
