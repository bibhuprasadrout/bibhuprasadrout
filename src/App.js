import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalColors } from "./DesignSystem/Utils/constants";
import styled from "styled-components";

const BackgroundPrimary = styled.div`
  background-color: ${(props) => props.theme.primary};
  min-height: 100vh;
  width: 100%;
`;
const OutletWrapper = styled.div`
  background-color: transperant;
  min-height: calc(100vh - 7rem);
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={GlobalColors}>
        <BackgroundPrimary className="bodyBackgroundPrimary">
          <Navbar />
          <OutletWrapper className="outletWrapper">
            <Outlet />
          </OutletWrapper>
          <Footer />
        </BackgroundPrimary>
      </ThemeProvider>
    </>
  );
};

export default App;
