import { createGlobalStyle } from "styled-components";

export const GlobalColors = {
  primary: "#004A99", // Deep Trust Blue
  secondary: "#0078FF", // Bright Professional Blue
  solid: "#E3F2FD", // Very Light Blue (Friendly)
  fragment: "#FFFFFF", // Pure White
  dark: "#1E293B", // Slate Dark (Modern Text)
  light: "#F8FAFC", // Off-white Background
};

export const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    height: 100%;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.5;
    color: ${GlobalColors.dark};
    background-color: ${GlobalColors.light};
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }

  /* Global selection & blinker fix */
  button,
  a,
  img,
  .icon,
  .logo,
  .menu-toggle {
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  /* Fix for the specific "blinker" in text-like divs used as buttons */
  [role="button"],
  .no-select {
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`;
