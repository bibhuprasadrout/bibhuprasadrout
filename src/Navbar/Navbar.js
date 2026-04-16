import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column; /* Stack TopBar and NavList */
  z-index: 1000;
`;
const TopBar = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: ${(props) =>
    props.theme.light}; /* Match your Soft Slate theme */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  z-index: 10; /* Higher than NavList */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
`;

const Logo = styled.a`
  font-weight: 900;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
`;
const NavList = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    width: 100%;
    padding: 2rem;
    gap: 2rem;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.border};

    /* Position it right at the bottom of the TopBar */
    position: absolute;
    top: 4.5rem;
    left: 0;

    /* Animation: Slide down from the bar */
    transform: ${(props) =>
      props.open ? "translateY(0)" : "translateY(-110%)"};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    /* Ensure it stays BEHIND the TopBar but ABOVE the page content */
    z-index: 5;
  }

  @media (min-width: 769px) {
    /* Desktop layout: keep it inline within the Nav */
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${(props) => props.theme.dark};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  /* Hover State: Subtle background tint */
  &:hover {
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.solid};
  }

  /* Active State Indicator */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.secondary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 60%;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  /* --- ADD THESE LINES --- */
  user-select: none; /* Standard */
  -webkit-user-select: none; /* Safari */
  -webkit-tap-highlight-color: transparent; /* Removes the blue box on mobile */
  /* ----------------------- */

  span {
    width: 25px;
    height: 3px;
    background: ${(props) => props.theme.dark};
    border-radius: 10px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  ${(props) =>
    props.open &&
    `
    span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
  `}
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = ["Home", "About", "Skills", "Projects", "Contact"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      {/* 1. This bar stays on top and is completely opaque */}
      <TopBar>
        <Logo href='#home'>BPR</Logo>
        <Burger open={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Burger>
      </TopBar>

      {/* 2. This list now slides from "under" the TopBar */}
      <NavList open={open}>
        {items.map((item) => (
          <NavLink
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}>
            {item}
          </NavLink>
        ))}
      </NavList>
    </Nav>
  );
};
