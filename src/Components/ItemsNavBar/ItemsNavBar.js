import React from "react";
import { Link, Routes } from "react-router-dom";
import styled from "styled-components";

const ItemNavBar = () => {
  return (
    <div>
      <div>
        <Routes>
          <Link to="modal">Modal</Link>
          <Link to="qa">QA</Link>
          <Link to="reviews">Reviews</Link>
          <Link to="slider">Slider</Link>
          <Link to="grocerybud">To Buy List</Link>
          <Link to="tabs">Tabs</Link>
          <Link to="timer">Timer</Link>
          <Link to="videoplayer">Video Player</Link>
          <Link to="menu">Menu</Link>
          <Link to="generator">Generator</Link>
        </Routes>
      </div>
    </div>
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
