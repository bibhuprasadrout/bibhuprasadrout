import { MainTitle, SubTitle } from "../../DesignSystem/Utils/Title/Title";
import styled from "styled-components";
import { Images } from "../../Assets/Images";
const AboutBody = styled.div`
  height: auto;
  min-height: 70vh;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  padding: 1rem 0;
  .title {
  }
  .main {
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    .image {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 0.5rem;
      .persona {
        max-width: 300px;
        border-radius: 30px 30px 30px 0;
        @media (min-width: 48em) {
          max-width: none;
        }
      }
      .mediaLink {
        display: flex;
        gap: 0.7rem;
        .iconBackdrop {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 0.3rem;
          .iconWrapper {
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 11px 11px 11px 0;
            background-color: ${(props) => props.theme.text_primary};
            grid-row-start: 1;
            grid-column-start: 1;
            .icon {
              width: 1.5rem;
            }
          }
          .iconName {
            font-size: 1.3rem;
            background-color: ${(props) => props.theme.text_primary};
            color: ${(props) => props.theme.btn_primary};
            grid-row-start: 1;
            grid-column-start: 1;
            height: 3rem;
            border-radius: 11px 11px 11px 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
            width: 3rem;
            overflow: hidden;
            transition: 0.7s;
          }
          &:hover {
            width: auto;
            .iconName {
              padding: 0 0.7rem 0 3rem;
              width: auto;
            }
          }
        }
      }
    }
  }
`;
export const About = () => {
  return (
    <>
      <AboutBody>
        <div className="title">
          <MainTitle>- Get to know me -</MainTitle>
          <SubTitle>Over a cup of coffee maybe?</SubTitle>
        </div>
        <div className="main">
          <div className="image">
            <img className="persona" src={Images.persona} alt={"persona"} />
            <div className="mediaLink">
              <a
                className="iconBackdrop"
                href={"https://www.linkedin.com/in/bibhuprasadrout-lin/"}
              >
                <span className="iconName">LinkedIn</span>
                <span className="iconWrapper">
                  <img
                    className="icon"
                    src={Images.linkedIn}
                    alt={"media icon"}
                  />
                </span>
              </a>
              <a
                className="iconBackdrop"
                href={"https://twitter.com/bibhuprasadrout"}
              >
                <span className="iconName">Twitter</span>
                <span className="iconWrapper">
                  <img
                    className="icon"
                    src={Images.twitter}
                    alt={"media icon"}
                  />
                </span>
              </a>
              <a
                className="iconBackdrop"
                href={"https://github.com/bibhuprasadrout"}
              >
                <span className="iconName">Github</span>
                <span className="iconWrapper">
                  <img
                    className="icon"
                    src={Images.github}
                    alt={"media icon"}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </AboutBody>
    </>
  );
};
