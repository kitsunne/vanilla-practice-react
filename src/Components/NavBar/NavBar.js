import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import QaContainer from "../Questions/QaContainer";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";
import GroceryBud from "../GroceryBud/GroceryBud";
import Tabs from "../Tabs/Tabs";
import CountDownTimer from "../CountdownTimer/CountDownTimer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Menu from "../Menu/Menu";
import Generator from "../Generator/Generator";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <MenuHeader onClick={handleMenuOpen}>
        {!isMenuOpen ? <HiMenu color="black" /> : <IoMdClose color="black" />}
      </MenuHeader>
      <NavbarWrapper isMenuOpen={isMenuOpen}>
        <img
          src="https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/11-navbar/final/src/logo.svg"
          alt="logo"
        />
        <LinksContainer>
          <StyledLink to="/" onClick={handleMenuOpen}>
            Modal
          </StyledLink>
          <StyledLink to="/qa" onClick={handleMenuOpen}>
            QA
          </StyledLink>
          <StyledLink to="/reviews" onClick={handleMenuOpen}>
            Reviews
          </StyledLink>
          <StyledLink to="menu" onClick={handleMenuOpen}>
            Menu
          </StyledLink>
          <StyledLink to="/grocerybud" onClick={handleMenuOpen}>
            GroceryBud
          </StyledLink>
          <StyledLink to="/slider" onClick={handleMenuOpen}>
            Slider
          </StyledLink>
          <StyledLink to="tabs" onClick={handleMenuOpen}>
            Tabs
          </StyledLink>
          <StyledLink to="/timer" onClick={handleMenuOpen}>
            Timer
          </StyledLink>
          <StyledLink to="/video" onClick={handleMenuOpen}>
            Video
          </StyledLink>
          <StyledLink to="/generator" onClick={handleMenuOpen}>
            Generator
          </StyledLink>
        </LinksContainer>
      </NavbarWrapper>

      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="qa" element={<QaContainer />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="menu" element={<Menu />} />
        <Route path="grocerybud" element={<GroceryBud />} />
        <Route path="slider" element={<Slider />} />
        <Route path="tabs" element={<Tabs />} />
        <Route path="timer" element={<CountDownTimer />} />
        <Route path="videoplayer" element={<VideoPlayer />} />
        <Route path="generator" element={<Generator />} />
      </Routes>
    </>
  );
};

const MenuHeader = styled.div`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }
  @media screen and (max-width: 480px) {
    top: 5px;
    right: 5px;
  }
  @media screen and (max-width: 320px) {
    top: 5px;
    right: 3px;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 35px 25px;
  z-index: 1000;
  font-size: 17px;

  @media screen and (max-width: 1024px) {
    padding: 30px 0;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 450px;
    font-size: 16px;
    position: fixed;
    top: 0;
    box-shadow: 5px 5px 20px;
    transition: all 0.3s ease;
    ${(props) =>
      props.isMenuOpen
        ? `
      background: white;
      left: 0;
      opacity: 1;
      position: absolute;
      transition: all 0.3s ease;
      z-index: 1;
    `
        : `
    opacity: 1;
    top: -100%;
    `}
  }
`;

const LinksContainer = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0 15px 0;
  }
`;

const StyledLink = styled(Link)`
  color: var(--clr-grey-3);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem 1rem;
  transition: var(--transition);

  &:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }
`;

export default Navbar;
