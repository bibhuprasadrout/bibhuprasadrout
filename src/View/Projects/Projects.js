import { useRef } from "react";
import styled from "styled-components";
import { Paragraph } from "../../DesignSystem/Utils/Paragraph/Paragraph";
import { SectionTitle } from "../../DesignSystem/Utils/Title/Title";
import { AnchoredButton } from "../../DesignSystem/Utils/Button/Button";
import { TutorialFinder } from "./TutorialFinderMini/TutorialFinder/TutorialFinder";
const ProjectsBody = styled.section`
  padding: 1rem;
  .microProject,
  .miniProject,
  .majorproject {
    margin: 0 auto 3rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.dark};
    .sectionInfo {
      padding: 0 0 1rem;
      .links {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        padding: 1rem 1rem 0 1rem;
      }
    }
    .project {
      &.foreign {
        height: 17rem;
        .iframe {
          height: 17rem;
        }
      }
      div {
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      }
    }
    @media (min-width: 48em) {
      display: grid;
      grid-template-columns: 23em 23em;
      max-width: 48rem;
      margin: 0 auto 3rem;
      justify-content: center;
      .sectionTitle {
        grid-column: span 2;
      }
      .sectionInfo {
        grid-column: span 1;
      }
      .project {
        grid-column: span 1;
        min-height: max-content;
        .iframe {
          height: inherit;
        }
      }
    }
  }
`;
export const Projects = () => {
  const iframe = `<iframe height="100%" 
  style = "width: 100%;"
  scrolling = "yes"
  title = "fx."
  src = "https://trackallexpenses.netlify.app/"
  frameborder = "no" allowtransparency = "true" allowfullscreen = "true" ></iframe >`;
  const ref = useRef();
  return (
    <>
      <ProjectsBody>
        <section className="microProject">
          <SectionTitle className="sectionTitle">Micro Project</SectionTitle>
          <div className="sectionInfo">
            <Paragraph>
              This is a tutorial finder application. You can find courses,
              tutorials, meetups, blogs and more.
            </Paragraph>
            <Paragraph>
              This application uses an API to fetch the Resources data.
            </Paragraph>
          </div>
          <div className="project">
            <TutorialFinder />
          </div>
        </section>
        <section className="miniProject">
          <SectionTitle className="sectionTitle">Mini Project</SectionTitle>
          <div className="sectionInfo">
            <Paragraph>
              This is a expense tracker application. You can track your expense
              by adding and removing expenses.
            </Paragraph>
            <Paragraph>
              This application uses redux to manage the data layer and react
              router to navigate around.
            </Paragraph>
            <div className="links">
              <AnchoredButton
                target="_blank"
                href="https://trackallexpenses.netlify.app/"
              >
                site
              </AnchoredButton>
              <AnchoredButton
                target="_blank"
                href="https://github.com/bibhuprasadrout/expense-tracker"
              >
                code
              </AnchoredButton>
            </div>
          </div>
          <div className="project foreign">
            <div
              ref={ref}
              className="iframe"
              dangerouslySetInnerHTML={{
                __html: iframe ? iframe : "",
              }}
            ></div>
          </div>
        </section>
      </ProjectsBody>
    </>
  );
};
