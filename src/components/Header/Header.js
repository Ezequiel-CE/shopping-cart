import React from "react";
import { Container } from "../shared/shared.styles";
import { NavBar, StyledLink } from "./Header.styled";
import Cart from "../Cart/Cart";

const Header = ({ products, setShoppingCart }) => {
  return (
    <Container>
      <h1>Fake store</h1>
      <NavBar>
        <StyledLink to="/shopping-cart">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <Cart cartData={products} setShoppingCart={setShoppingCart} />
      </NavBar>
    </Container>
  );
};

export default Header;
