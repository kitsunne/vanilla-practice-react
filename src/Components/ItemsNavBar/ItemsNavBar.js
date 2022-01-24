import React from "react";
import { NavLink, Routes } from "react-router-dom";
import styled from "styled-components";

const ItemNavBar = () => {
  return (
    <NavWrapper>
      <NavItem>
        <Routes>
          <NavLink to="/modal">Modal</NavLink>
          <NavLink to="/qa">QA</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/slider">Slider</NavLink>
          <NavLink to="/grocerybud">To Buy List</NavLink>
          <NavLink to="/tabs">Tabs</NavLink>
          <NavLink to="/timer">Timer</NavLink>
          <NavLink to="/videoplayer">Video Player</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/generator">Generator</NavLink>
        </Routes>
      </NavItem>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  grid-area: nav;
  background-color: #ff847b;
  padding: 20px;
`;

const NavItem = styled.div`
  ${NavLink} {
    color: aliceblue;
    text-decoration: none;
    font-size: 18px;
    padding-bottom: 10px;
  }
`;

export default ItemNavBar;
