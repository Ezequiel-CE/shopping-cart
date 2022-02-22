import React from "react";
import {
  StyledContainerHome,
  StyledTittle,
  StyledHomeButton,
  StyledTextArea,
} from "./Homes.styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledContainerHome>
      <StyledTextArea>
        <StyledTittle>Buying was never that easy!</StyledTittle>

        <Link to="/products" style={{ textDecoration: "none" }}>
          <StyledHomeButton>go to the Store</StyledHomeButton>
        </Link>
      </StyledTextArea>
    </StyledContainerHome>
  );
};

export default Home;
