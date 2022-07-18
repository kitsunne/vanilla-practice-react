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
        <LinksContainer>
          <StyledLink to="/modal" onClick={handleMenuOpen}>
            Modal
          </StyledLink>
          <StyledLink to="/qa" onClick={handleMenuOpen}>
            QA
          </StyledLink>
          <StyledLink to="/reviews" onClick={handleMenuOpen}>
            Reviews
          </StyledLink>
          <StyledLink to="/" onClick={handleMenuOpen}>
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
        <Route path="modal" element={<Modal />} />
        <Route path="qa" element={<QaContainer />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="/" element={<Menu />} />
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  font-size: 17px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1440px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 11px;
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
