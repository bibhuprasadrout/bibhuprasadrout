import { MainTitle, SubTitle } from "../../DesignSystem/Utils/Title/Title";
import styled from "styled-components";
import { Images } from "../../Assets/Images";
import { useTyper } from "../../Utils/Hooks/useTyper";
import { AnchoredButton } from "../../DesignSystem/Utils/Button/Button";
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
    @media (min-width: 48rem) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
    }
    .imageWrapper {
      flex: 1;
      .image {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5rem;
        max-width: fit-content;
        margin: 0 auto;
        @media (min-width: 48rem) {
          margin: 0 0 0 auto;
        }
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
              background-color: ${(props) => props.theme.fragment};
              grid-row-start: 1;
              grid-column-start: 1;
              .icon {
                width: 1.5rem;
              }
            }
            .iconName {
              font-size: 1.3rem;
              background-color: ${(props) => props.theme.fragment};
              color: ${(props) => props.theme.solid};
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
    .infoWrapper {
      flex: 1;
      .info {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem;
        max-width: 33rem;
        color: ${(props) => props.theme.light};
        margin: 1rem auto 0;
        @media (min-width: 32rem) {
          max-width: 70vw;
        }
        @media (min-width: 48rem) {
          margin: 1rem auto 0 0;
        }
        .heading {
          font-size: calc(1rem + 3vw);
          font-weight: bold;
          display: flex;
          flex-wrap: wrap;
          min-height: max-content;
          @media (min-width: 48em) {
            font-size: calc(0.9rem + 0.7vw);
          }
          .personaDesignation {
            min-height: 2.7rem;
            color: ${(props) => props.theme.dark};
            min-width: 17rem;
            display: inline;
            @media (min-width: 48em) {
              min-height: 1.7rem;
            }
          }
        }
        .profess {
          font-size: 1.1rem;
          margin: 0 0 1rem;
          @media (min-width: 48em) {
            margin: 1rem auto;
          }
        }
        .infoButton {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
const AerrowHead = styled.img`
  height: 1rem;
  padding: 0 0 0 0.7rem;
`;
export const About = () => {
  const designations = [
    "React.js Developer",
    "JavaScript Developer",
    "Frontend Developer",
  ];
  return (
    <>
      <AboutBody>
        <div className="title">
          <MainTitle>- Get to know me -</MainTitle>
          <SubTitle>Over a cup of coffee maybe?</SubTitle>
        </div>
        <div className="main">
          <div className="imageWrapper">
            <div className="image">
              <img className="persona" src={Images.persona} alt="persona" />
              <div className="mediaLink">
                <a
                  className="iconBackdrop"
                  href={"https://www.linkedin.com/in/bibhuprasadrout-lin/"}
                  target={"_blank"}
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
                  target={"_blank"}
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
                  target={"_blank"}
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
          <div className="infoWrapper">
            <div className="info">
              <div className="heading">
                <p>I'am BibhuPrasadRout and I'm a&nbsp;</p>
                <p className="personaDesignation">{useTyper(designations)}</p>
              </div>
              <p className="profess">
                I'm a passionate React.js Developer. I aim to build fast,
                scalable, mobile-first, foolproof websites. I enjoy stories and
                am a quick study. I welcome the opportunity to learn and aquire
                skills with open arms. With almost two years of experience as a
                web designer and then a web developer, I have a good
                understanding of react and all its helper packages and
                frameworks..
              </p>
              <AnchoredButton
                className="infoButton"
                target="_blank"
                href="https://drive.google.com/file/d/12HzKPSHOx_QTEoaW1Mk5kpCMr0hQhjo4/view?usp=sharing"
              >
                Download CV&nbsp;
                <AerrowHead src={Images.playFragment} alt="right arrow" />
              </AnchoredButton>
            </div>
          </div>
        </div>
      </AboutBody>
    </>
  );
};
