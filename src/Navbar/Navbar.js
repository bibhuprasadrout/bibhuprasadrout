import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Images } from "../Assets/Images";

// Mobile menu slide-in animation
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.dark};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .menuIcon {
    cursor: pointer;
    .icon {
      width: 2rem;
    }
    @media (min-width: 720px) {
      display: none;
    }
  }

  .navItems {
    display: none;
    @media (min-width: 720px) {
      display: flex;
      gap: 1.5rem;
    }
  }

  .navItemsMobile {
    display: ${({ $menuVisible }) => ($menuVisible ? "flex" : "none")};
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.secondary};
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    animation: ${slideIn} 0.3s ease-in-out;

    @media (min-width: 720px) {
      display: none;
    }
  }

  .link {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.fragment};
    text-decoration: none;
    padding: 0.5rem;
    transition: color 0.3s ease-in-out, transform 0.2s;

    &:hover {
      color: ${(props) => props.theme.solid};
      transform: scale(1.1);
    }

    &.active {
      color: ${(props) => props.theme.solid};
    }
  }
`;

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const navItems = [
    { id: "navHome", url: "/", value: "Home" },
    { id: "navAbout", url: "/about", value: "About" },
    { id: "navSkills", url: "/skills", value: "Skills" },
    { id: "navProjects", url: "/projects", value: "Projects" },
    { id: "navContact", url: "/contact", value: "Contact" },
  ];

  return (
    <Nav $menuVisible={menuVisible}>
      {/* Mobile Menu Icon */}
      <span className='menuIcon' onClick={() => setMenuVisible(!menuVisible)}>
        <img className='icon' src={Images.burgerMenu} alt='Menu' />
      </span>

      {/* Desktop Navigation */}
      <div className='navItems'>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            className='link'
            to={item.url}
            activeClassName='active'>
            {item.value}
          </NavLink>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className='navItemsMobile'>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            className='link'
            to={item.url}
            activeClassName='active'
            onClick={() => setMenuVisible(false)}>
            {item.value}
          </NavLink>
        ))}
      </div>
    </Nav>
  );
};
