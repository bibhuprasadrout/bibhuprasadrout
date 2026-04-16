import React from "react";
import styled from "styled-components";
import { Card, CardTitle, CardSubTitle } from "../../styles/UIElements";
import { TutorialFinderOutLet } from "./TutorialFinderOutlet";

const LandingBody = styled.div`
  width: 100%;
  padding: 0.5rem; /* Small buffer for mobile */

  .card {
    margin: 0 auto;
    width: 100%;
    /* Remove max-height to prevent content cutting off on mobile */
    height: auto;
    border-radius: 12px;
    background-color: ${(props) =>
      props.theme.light}; /* Muted inner background */
    border: 1px solid ${(props) => props.theme.border};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 48rem) {
      padding: 2.5rem;
    }

    .title {
      text-align: left; /* Keep text left-aligned for a modern tool look */

      .mainTitle {
        padding: 0;
        margin: 0;
        font-size: calc(1.3rem + 0.3vw); /* Fluid typography */
        color: ${(props) => props.theme.dark};
      }

      .subTitle {
        margin-top: 0.3rem;
        font-size: 1rem;
        color: #64748b; /* Muted slate for subtitle */
      }
    }
  }

  /* Ensure the outlet content stretches properly */
  .outlet-container {
    width: 100%;
    overflow-x: auto; /* Scroll horizontally if a table or list gets too wide */
  }
`;

export const TutorialFinder = () => {
  return (
    <LandingBody>
      <Card className='card'>
        <header className='title'>
          <CardTitle className='mainTitle'>Want to learn coding too?</CardTitle>
          <CardSubTitle className='subTitle'>
            Let's get you started...
          </CardSubTitle>
        </header>

        <div className='outlet-container'>
          <TutorialFinderOutLet />
        </div>
      </Card>
    </LandingBody>
  );
};
