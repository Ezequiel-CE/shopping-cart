import React from "react";
import CartLogo from "../../assets/cart.svg";
import { StyledCart, StyledNumber } from "./Cartico.style";

const CartIco = ({ ShowHandler, cartData }) => {
  return (
    <StyledCart onClick={ShowHandler}>
      <img src={CartLogo} alt="" style={{ width: "30px" }} />
      {cartData.length > 0 ? (
        <StyledNumber>
          {cartData.reduce((acc, item) => acc + item.amount, 0)}
        </StyledNumber>
      ) : (
        ""
      )}
    </StyledCart>
  );
};

export default CartIco;
