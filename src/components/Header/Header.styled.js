import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
