import { width } from "dom-helpers";
import React from "react";
import testImg from "../../assets/test.jpg";
import {
  StyledPreviwImg,
  StyledConteinerPrev,
  StyledProductTitle,
  StyledModi,
  StyledTextPrev,
  StyledPricePrev,
} from "./CartPreviewItem.styled";

const CartPreviewItem = ({ itemData }) => {
  const { item, amount } = itemData;

  const shortenTittle = (title) => {
    if (title.length > 20) {
      return title.slice(0, 50) + "...";
    }
    return title;
  };

  return (
    <StyledConteinerPrev>
      <div style={{ width: "80px", height: "80px" }}>
        <StyledPreviwImg src={item.image} alt="#" />
      </div>
      <StyledTextPrev>
        <StyledProductTitle>{shortenTittle(item.title)}</StyledProductTitle>

        <StyledModi>
          <div>+</div>
          <div>{amount}</div>
          <div>-</div>
        </StyledModi>
      </StyledTextPrev>
      <div style={{ width: "72px" }}>
        <StyledPricePrev>${(amount * item.price).toFixed(2)}</StyledPricePrev>
      </div>
    </StyledConteinerPrev>
  );
};

export default CartPreviewItem;
