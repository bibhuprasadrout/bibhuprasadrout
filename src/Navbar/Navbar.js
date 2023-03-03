import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
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
  .navItems {
    display: flex;
    gap: 1.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    height: 100%;
    max-width: fit-content;
    margin: 0 13vw 0 auto;
    padding: 0 3rem;
    align-items: center;
    .link {
      transform: scale(1);
      color: ${(props) => props.theme.text_primary};
      &:hover {
        transform: scale(1.1);
        color: ${(props) => props.theme.btn_primary};
      }
    }
  }
`;

export const Navbar = () => {
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
  return (
    <>
      {
        <Nav>
          <div className="navItems">
            {navItems.map((item) => (
              <Link className={item.className} to={item.url} key={item.id}>
                {item.value}
              </Link>
            ))}
          </div>
        </Nav>
      }
    </>
  );
};
