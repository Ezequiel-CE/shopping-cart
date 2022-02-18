import React from "react";
import { Container } from "../shared/shared.styles";
import { NavBar, StyledLink } from "./Header.styled";
import Cart from "../Cart/Cart";

const Header = ({ products, plusModifier, minusModifier, deleteItemCart }) => {
  return (
    <Container>
      <h1>Fake store</h1>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <Cart
          cartData={products}
          plusModifier={plusModifier}
          minusModifier={minusModifier}
          deleteItemCart={deleteItemCart}
        />
      </NavBar>
    </Container>
  );
};

export default Header;
