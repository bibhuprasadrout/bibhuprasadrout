import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { GlobalColors, ResetCSS } from "./styles/constants";
import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.light};
`;

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
  box-sizing: border-box;
  /* Alternating backgrounds for professional feel */
  &:nth-child(even) {
    background-color: ${(props) => props.theme.fragment};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={GlobalColors}>
      <ResetCSS />
      <Navbar />
      <MainContent>
        <SectionWrapper id='home'>
          <Home />
        </SectionWrapper>
        <SectionWrapper id='about'>
          <About />
        </SectionWrapper>
        <SectionWrapper id='skills'>
          <Skills />
        </SectionWrapper>
        <SectionWrapper id='projects'>
          <Projects />
        </SectionWrapper>
      </MainContent>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
