import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemsNavBar = () => {
  return (
    <NavWrapper>
      <LinkList>
        <StyledLink to="modal">Modal</StyledLink>
        <StyledLink to="qa">QA</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
        <StyledLink to="menu">Menu</StyledLink>
        <StyledLink to="grocerybud">To Buy List</StyledLink>
        <StyledLink to="slider">Slider</StyledLink>
        <StyledLink to="tabs">Tabs</StyledLink>
        <StyledLink to="timer">Timer</StyledLink>
        <StyledLink to="videoplayer">Video Player</StyledLink>
        <StyledLink to="generator">Generator</StyledLink>
      </LinkList>
    </NavWrapper>
  );
};

const LinkList = styled.ul`
  padding: 40px;
  display: flex;
  flex-direction: column;
  background: var(--clr-white);
  box-shadow: var(--light-shadow);
`;
const StyledLink = styled(Link)`
  lor: aliceblue;
  text-decoration: none;
  font-size: 17px;
  color: var(--clr-grey-3);
  padding-bottom: 10px;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  margin-bottom: 10px;
  &:hover {
    color: var(--clr-primary-7);
  }
`;
const NavWrapper = styled.nav`
  grid-area: nav;
`;

export default ItemsNavBar;
