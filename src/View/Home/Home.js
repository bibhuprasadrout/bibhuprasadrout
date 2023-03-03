import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTyper } from "../../Utils/Hooks/useTyper";

const blinkerSimulator = keyframes`
  0%{
          border-right: 7px solid #DFDCE3;
  }
  90%{
          border-right: 7px solid #DFDCE3;
  }
  91%{
          border-right: 7px solid transperant;
  }
  `;
const HomeBody = styled.section`
  display: flex;
  min-height: 70vh;
  height: 100%;
  .bodyContent {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 0 0 11vw;
    .nameIntro {
      min-width: 381px;
      .hi {
        font-size: 1rem;
        padding: 0 0 0 0.13rem;
      }
      .name {
        font-size: calc(2rem + 0.3vw);
        font-weight: bold;
        color: ${(props) => props.theme.secondary};
      }
      .designation {
        font-size: 1.3rem;
        display: inline-flex;
        align-items: center;
        height: 2.1rem;
        padding: 0 0 0 0.13rem;
        .typer {
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          max-width: fit-content;
          height: 2.1rem;
          padding: 0 0.17rem;
          animation: ${blinkerSimulator} linear infinite 3s alternate;
          color: ${(props) => props.theme.text_primary};
        }
      }
    }
  }
`;
export const Home = () => {
  const designation = [
    "React.js Developer",
    "JavaScript Developer",
    "Frontend Developer",
  ];
  return (
    <>
      <HomeBody>
        <div className="bodyContent">
          <div className="nameIntro">
            <p className="hi">Hi,</p>
            <h1 className="name">BIBHU PRASAD ROUT </h1>
            <h3 className="designation">
              here. I'm a &nbsp;
              <span className="typer">{useTyper(designation)}</span>
            </h3>
          </div>
        </div>
        <div className="bodyContent"></div>
      </HomeBody>
    </>
  );
};
