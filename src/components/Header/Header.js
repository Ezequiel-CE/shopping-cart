import React from "react";
import { Container } from "../shared/shared.styles";
import { NavBar, StyledLink } from "./Header.styled";
import Cart from "../Cart/Cart";

const Header = ({ products }) => {
  return (
    <Container>
      <h1>Fake store</h1>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <Cart cartData={products} />
      </NavBar>
    </Container>
  );
};

export default Header;
