import React from "react";
import closeImg2 from "../../assets/close2.svg";

import {
  StyledPreviwImg,
  StyledConteinerPrev,
  StyledProductTitle,
  StyledModi,
  StyledTextPrev,
  StyledPricePrev,
  StyledModificador,
  StyledDelete,
} from "./CartPreviewItem.styled";

const CartPreviewItem = ({ itemData, plusModifier, minusModifier }) => {
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
          <StyledModificador onClick={() => plusModifier(itemData)}>
            +
          </StyledModificador>
          <div style={{ cursor: "default" }}>{amount}</div>
          <StyledModificador onClick={() => minusModifier(itemData)}>
            -
          </StyledModificador>
        </StyledModi>
      </StyledTextPrev>
      <div style={{ width: "72px" }}>
        <StyledPricePrev>${(amount * item.price).toFixed(2)}</StyledPricePrev>
      </div>
      <StyledDelete>
        <img src={closeImg2} style={{ width: "30px" }} alt="" />
      </StyledDelete>
    </StyledConteinerPrev>
  );
};

export default CartPreviewItem;
