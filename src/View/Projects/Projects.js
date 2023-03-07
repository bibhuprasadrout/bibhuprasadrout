import styled from "styled-components";
import { Paragraph } from "../../DesignSystem/Utils/Paragraph/Paragraph";
import { SectionTitle } from "../../DesignSystem/Utils/Title/Title";
import { TutorialFinder } from "./TutorialFinderMini/TutorialFinder/TutorialFinder";
const ProjectsBody = styled.section`
  padding: 1rem;
  .microProject {
    margin: 0 auto 3rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.dark};
    .sectionInfo {
      padding: 0 0 1rem;
    }
    @media (min-width: 48em) {
      display: grid;
      grid-template-columns: 23em 23em;
      max-width: 48rem;
      margin: 0 auto;
      justify-content: center;
      .sectionTitle {
        grid-column: span 2;
      }
      .sectionInfo {
        grid-column: span 1;
      }
      .project {
        grid-column: span 1;
      }
    }
  }
`;
export const Projects = () => {
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
      </ProjectsBody>
    </>
  );
};
