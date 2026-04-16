import React, { useRef } from "react";
import styled from "styled-components";
import {
  Paragraph,
  SectionTitle,
  AnchoredButton,
  Card,
} from "../styles/UIElements";
import { TutorialFinder } from "./TutorialFinderMini/TutorialFinder";

const ProjectsBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 1.5rem;
  gap: 4rem;

  .section-header {
    text-align: center;
    h2 {
      margin: 0 auto;
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    @media (max-width: 480px) {
      /* On tiny screens, make buttons full width for easier tapping */
      a {
        width: 100%;
        max-width: none;
      }
    }
  }

  /* Shared Card Style for all project types */
  .microProject,
  .miniProject,
  .petProject {
    width: 100%;
    background-color: ${(props) => props.theme.fragment};
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    transition: transform 0.3s ease;

    @media (min-width: 64rem) {
      padding: 3.5rem;
    }

    &:hover {
      transform: translateY(-5px);
    }

    .sectionInfo {
      text-align: left;
      .links {
        display: flex;
        flex-wrap: wrap; /* Ensures buttons don't break on small screens */
        justify-content: flex-start;
        gap: 1rem;
        margin-top: 1.5rem;
      }
    }

    /* THE MOBILE FRAME UI */
    .project.foreign {
      position: relative;
      width: 100%;
      /* 1. Limit the width so it doesn't get too wide on tablets */
      max-width: 280px;
      margin: 2rem auto 0;

      /* 2. Use aspect-ratio for modern browsers (9:16) */
      aspect-ratio: 9 / 16;

      /* 3. HARD LIMIT the height to ensure it fits on the screen */
      max-height: 500px;

      /* The Device Bezel */
      border: 8px solid #1e293b;
      border-radius: 32px;
      outline: 3px solid #cbd5e1;
      background: #000;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);

      /* For older browsers that don't support aspect-ratio */
      @supports not (aspect-ratio: 9/16) {
        height: 500px;
      }

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      }

      /* On very small mobile devices, we shrink the frame even more */
      @media (max-width: 375px) {
        max-width: 240px;
        max-height: 420px;
      }
    }
  }
`;

export const Projects = () => {
  const expenseTrackerIFrameString = `<iframe
    title="TrackAllExpenses"
    src="https://trackallexpenses.netlify.app/"
    allowtransparency="true"
    allowfullscreen="true"></iframe>`;

  const basicEcomIFrameString = `<iframe
    title="basic-ecom"
    src="https://basic-ecom-qgbz.onrender.com/"
    allowtransparency="true"
    allowfullscreen="true"></iframe>`;

  const ref = useRef();

  return (
    <ProjectsBody id='projects'>
      <div className='section-header'>
        <SectionTitle>Featured Projects</SectionTitle>
      </div>

      <section className='petProject'>
        <div className='sectionInfo'>
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}>
            Basic E-Commerce
          </h3>
          <Paragraph>
            A full-stack deployment of an end-to-end e-commerce platform.
            Features include persistent cart management, JWT authentication, and
            a MongoDB-backed product catalog.
          </Paragraph>
          <div className='links'>
            <AnchoredButton
              target='_blank'
              href='https://basic-ecom-qgbz.onrender.com'>
              Live Site
            </AnchoredButton>
            <AnchoredButton
              target='_blank'
              href='https://github.com/bibhuprasadrout/basic-ecom'
              style={{ background: "#f1f5f9", color: "#1e293b" }}>
              Source — UI
            </AnchoredButton>
            <AnchoredButton
              target='_blank'
              href='https://github.com/bibhuprasadrout/basic-ecom-backend'
              style={{ background: "#f1f5f9", color: "#1e293b" }}>
              Source — Backend
            </AnchoredButton>
          </div>
        </div>

        {/* The Mobile Frame container */}
        <div
          className='project foreign'
          dangerouslySetInnerHTML={{ __html: basicEcomIFrameString }}
        />
      </section>

      <section className='microProject'>
        <div className='sectionInfo'>
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}>
            Tutorial Finder
          </h3>
          <Paragraph>
            A smart resource discovery tool. Effortlessly find the best courses,
            meetups, and technical blogs tailored for developers.
          </Paragraph>
          <Paragraph>
            Built using a custom API integration to keep resources up-to-date
            and searchable.
          </Paragraph>
        </div>
        <div className='project'>
          <TutorialFinder />
        </div>
      </section>

      <section className='miniProject'>
        <div className='sectionInfo'>
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}>
            Expense Tracker
          </h3>
          <Paragraph>
            Master your finances with this clean, state-driven application. Uses
            Redux Toolkit for robust data management and React Router for
            seamless navigation.
          </Paragraph>
          <div className='links'>
            <AnchoredButton
              target='_blank'
              href='https://trackallexpenses.netlify.app/'>
              Live Site
            </AnchoredButton>
            <AnchoredButton
              target='_blank'
              href='https://github.com/bibhuprasadrout/expense-tracker'
              style={{ background: "#f1f5f9", color: "#1e293b" }}>
              Source Code
            </AnchoredButton>
          </div>
        </div>
        <div
          className='project foreign'
          dangerouslySetInnerHTML={{ __html: expenseTrackerIFrameString }}
        />
      </section>
    </ProjectsBody>
  );
};
