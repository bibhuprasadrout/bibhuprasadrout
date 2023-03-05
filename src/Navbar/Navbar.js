import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Images } from "../Assets/Images";
const navbarBackgroundAnimation = keyframes`
0%{
  background-position: 0% 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0% 50%;
}
`;
const Nav = styled.div`
  background: linear-gradient(70deg, #d2512e, #4abdac, #f78733);
  background-size: 400% 400%;
  animation: ${navbarBackgroundAnimation} ease infinite 17s;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  position: sticky;
  top: 0;
  height: 4rem;
  transition: all 1s ease;
  border-radius: 0;
  .menuIcon {
    position: absolute;
    top: 50%;
    right: 2.1rem;
    transform: translate(0, -50%);
    max-width: fit-content;
    cursor: pointer;
    .icon {
      width: 2.1rem;
    }
    @media (min-width: 48em) {
      display: none;
    }
  }
  .navItems,
  .navItemsMobile {
    justify-content: center;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    height: 100%;
    align-items: center;
    border-radius: 0;
    .link {
      transform: scale(1);
      color: ${(props) => props.theme.text_primary};
      &:hover {
        transform: scale(1.1);
        color: ${(props) => props.theme.btn_primary};
      }
    }
  }
  .navItemsMobile {
    display: flex;
    position: relative;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.secondary};
    @media (min-width: 48em) {
      display: none;
    }
  }
  .navItems {
    display: none;
    @media (min-width: 48em) {
      display: flex;
      width: fit-content;
      margin: 0 11vw 0 auto;
    }
  }
`;
export const Navbar = () => {
  const navItems = [
    {
      id: "navHome",
      className: "link",
      url: "/",
      value: "Home",
    },
    {
      id: "navAbout",
      className: "link",
      url: "/about",
      value: "About",
    },
    {
      id: "navSkills",
      className: "link",
      url: "/skills",
      value: "Skills",
    },
    {
      id: "navProjects",
      className: "link",
      url: "/projects",
      value: "Projects",
    },
    {
      id: "navContact",
      className: "link",
      url: "/contact",
      value: "Contact",
    },
  ];
  const [menuVisiblity, setMenuVisiblity] = useState(false);
  const handleMenuVisiblity = () => {
    setMenuVisiblity((prev) => !prev);
  };
  const handleNavItemStyle = () => {};
  return (
    <>
      {
        <Nav>
          <span className="menuIcon" onClick={handleMenuVisiblity}>
            <img className="icon" src={Images.burgerMenu} />
          </span>
          {menuVisiblity ? (
            <div className="navItemsMobile">
              {navItems.map((item) => (
                <NavLink
                  className={item.className}
                  to={item.url}
                  key={item.id}
                  style={({ isActive }) =>
                    isActive ? { color: "#F78733" } : undefined
                  }
                  onClick={handleMenuVisiblity}
                >
                  {item.value}
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="navItems">
              {navItems.map((item) => (
                <NavLink
                  className={item.className}
                  to={item.url}
                  key={item.id}
                  style={({ isActive }) =>
                    isActive ? { color: "#F78733" } : undefined
                  }
                >
                  {item.value}
                </NavLink>
              ))}
            </div>
          )}
        </Nav>
      }
    </>
  );
};

// const [navbar, setNavbar] = useState(false);
// const navController = () => {
//   console.log("navController is called");
//   console.log(document.body.scrollTop);
//   if (document.body.scrollTop > 50) {
//     console.log("scrollY is greater than 100");
//     setNavbar(true);
//   } else {
//     setNavbar(false);
//   }
// };
// useEffect(() => {
//   document.body.addEventListener("scroll", navController);
//   return () => {
//     document.body.removeEventListener("scroll", navController);
//   };
// }, []);
