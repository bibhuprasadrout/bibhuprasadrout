import { useRef } from "react";
import styled from "styled-components";
import { Paragraph, SectionTitle, AnchoredButton } from "../styles/UIElements";
import { TutorialFinder } from "./Projects/TutorialFinderMini/TutorialFinder";

const ProjectsBody = styled.section`
  /* Using a Soft Slate background to reduce glare and eye strain */
  background-color: ${(props) => props.theme.light};
  padding: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  .section-header {
    text-align: center;
    h2 {
      margin: 0 auto;
      /* Using a deep navy for headings to ensure high contrast without harshness */
      color: ${(props) => props.theme.dark};
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .microProject,
  .miniProject,
  .majorproject {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2.5rem;
    border-radius: 20px;

    /* THE FIX: Pure white cards on a soft gray background create a
       clear focal point that is much easier for the eyes to lock onto. */
    background-color: ${(props) => props.theme.fragment};

    /* Adding a thin border and soft shadow to define boundaries clearly */
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    @media (min-width: 64rem) {
      padding: 4rem;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 30px -10px rgba(0, 74, 153, 0.1);
    }

    .sectionInfo {
      text-align: left;

      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.dark};
      }

      /* Dark slate text color for the highest readability score */
      p {
        color: #334155;
        line-height: 1.8;
      }

      .links {
        display: flex;
        justify-content: flex-start;
        gap: 1.2rem;
        margin-top: 1.5rem;
      }
    }

    .project {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      /* Placeholder background to reduce visual weight */
      background: #e2e8f0;

      &.foreign {
        position: relative;
        /* Maintaining 16:9 ratio for responsive consistency */
        padding-bottom: 56.25%;
        height: 0;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          /* Adding a small brightness filter can help if the iframe site is too bright */
          filter: contrast(95%);
        }
      }

      div::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }
`;

export const Projects = () => {
  const iframe = `<iframe height="100%"
  style = "width: 100%;"
  scrolling = "yes"
  title = "TrackAllExpenses"
  src = "https://trackallexpenses.netlify.app/"
  frameborder = "no" allowtransparency = "true" allowfullscreen = "true" ></iframe >`;
  const ref = useRef();
  return (
    <>
      <ProjectsBody>
        <section className='microProject'>
          <SectionTitle className='sectionTitle'>Micro Project</SectionTitle>
          <div className='sectionInfo'>
            <Paragraph>
              This is a tutorial finder application. You can find courses,
              tutorials, meetups, blogs and more.
            </Paragraph>
            <Paragraph>
              This application uses an API to fetch the Resources data.
            </Paragraph>
          </div>
          <div className='project'>
            <TutorialFinder />
          </div>
        </section>
        <section className='miniProject'>
          <SectionTitle className='sectionTitle'>Mini Project</SectionTitle>
          <div className='sectionInfo'>
            <Paragraph>
              This is a expense tracker application. You can track your expense
              by adding and removing expenses.
            </Paragraph>
            <Paragraph>
              This application uses redux to manage the data layer and react
              router to navigate around.
            </Paragraph>
            <div className='links'>
              <AnchoredButton
                target='_blank'
                href='https://trackallexpenses.netlify.app/'>
                site
              </AnchoredButton>
              <AnchoredButton
                target='_blank'
                href='https://github.com/bibhuprasadrout/expense-tracker'>
                code
              </AnchoredButton>
            </div>
          </div>
          <div className='project foreign'>
            <div
              ref={ref}
              className='iframe'
              dangerouslySetInnerHTML={{
                __html: iframe ? iframe : "",
              }}></div>
          </div>
        </section>
      </ProjectsBody>
    </>
  );
};
