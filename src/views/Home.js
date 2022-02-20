import React from "react";
import {
  StyledContainerHome,
  StyledTittle,
  StyledHomeButton,
} from "./Homes.styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledContainerHome>
      <StyledTittle>Buying was never that easy!</StyledTittle>
      <Link to="/products">
        <StyledHomeButton>go to the Store</StyledHomeButton>
      </Link>
    </StyledContainerHome>
  );
};

export default Home;
