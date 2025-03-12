import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalColors } from "./DesignSystem/Utils/constants";
import styled from "styled-components";

const BackgroundPrimary = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
`;
const OutletWrapper = styled.div`
  height: auto;
  padding: 4rem 0 3rem 0;
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={GlobalColors}>
        <BackgroundPrimary className='bodyBackgroundPrimary'>
          <Navbar />
          <OutletWrapper className='outletWrapper'>
            <Outlet />
          </OutletWrapper>
          <Footer />
        </BackgroundPrimary>
      </ThemeProvider>
    </>
  );
};

export default App;
