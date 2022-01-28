import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./navData";
import styled from "styled-components";
import devices from "../../Properties/sizes";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <Nav>
      <NavWrapper>
        <NavHeader>
          <Logo
            src="https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg"
            alt="logo"
          />
          <NavToggle onClick={toggleLinks}>
            <FaBars />
          </NavToggle>
        </NavHeader>
        <LinksContainer ref={linksContainerRef}>
          <LinksList ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Links href={url}>{text}</Links>
                </li>
              );
            })}
          </LinksList>
        </LinksContainer>
        <SocialIcons>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <SocialLinks href={url}>{icon}</SocialLinks>
              </li>
            );
          })}
        </SocialIcons>
      </NavWrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  grid-area: header;
  background: var(--clr-white);
  box-shadow: var(--light-shadow);
`;
const NavWrapper = styled.div`
  @media ${devices.tablet} {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;
const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media ${devices.tablet} {
    padding: 0;
  }
`;
const Logo = styled.img`
  height: 40px;
`;

const NavToggle = styled.button`
  font-size: 1.5rem;
  color: var(--clr-primary-5);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
  display: none;
  &:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
`;
const LinksContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  @media ${devices.tablet} {
    height: auto !important;
  }
  @media ${devices.mobileL} {
    height: auto !important;
  }
  @media ${devices.mobileM} {
    height: auto !important;
  }
  @media ${devices.mobileS} {
    height: auto !important;
  }
`;
const LinksList = styled.ul`
  @media ${devices.tablet} {
    display: flex;
  
`;
const SocialIcons = styled.ul`
  display: none;
  @media ${devices.tablet} {
    display: flex;
    &:hover a {
      color: var(--clr-primary-7);
    }
  }
`;
const Links = styled.a`
  color: var(--clr-grey-3);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
  text-decoration: none;
  &:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }
  @media ${devices.tablet} {
    padding: 0;
    margin: 0 0.5rem;
    &:hover {
      padding: 0;
      background: transparent;
    }
  }
  @media ${devices.mobileM} {
    padding: 0;
    margin: 0 0.5rem;
    &:hover {
      padding: 0;
      background: transparent;
    }
  }
  @media ${devices.mobileS} {
    padding: 0;
    margin: 0 0.5rem;
    &:hover {
      padding: 0;
      background: transparent;
    }
  }
`;
const SocialLinks = styled.a`
  @media ${devices.tablet} {
    margin: 0 0.5rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
    text-decoration: none;
    &:hover {
      color: var(--clr-primary-7);
    }
  }
`;

export default Navbar;
