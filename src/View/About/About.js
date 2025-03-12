import { MainTitle, SubTitle } from "../../DesignSystem/Utils/Title/Title";
import styled from "styled-components";
import { Images } from "../../Assets/Images";
import { useTyper } from "../../Utils/Hooks/useTyper";
import { AnchoredButton } from "../../DesignSystem/Utils/Button/Button";
const AboutBody = styled.div`
  display: flex;
  flex-flow: column;
  gap: 3rem;
  padding: 1rem 0;
  .title {
    .subTitle {
      border-radius: 7px;
    }
  }
  .main {
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
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          .iconWrapper {
            width: 2.3rem;
            height: 2.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 7px 7px 7px 0;
            background-color: ${(props) => props.theme.fragment};
            .icon {
              border-radius: 0;
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
        <div className='title'>
          <MainTitle className='mainTitle'>- Get to know me -</MainTitle>
          <SubTitle className='subTitle'>Over a cup of coffee maybe?</SubTitle>
        </div>
        <div className='main'>
          <div className='imageWrapper'>
            <div className='image'>
              <img className='persona' src={Images.persona} alt='persona' />
              <div className='mediaLink'>
                <a
                  className='iconWrapper'
                  href={"https://www.linkedin.com/in/bibhuprasadrout-lin/"}
                  target={"_blank"}>
                  <img
                    className='icon'
                    src={Images.linkedIn}
                    alt={"media icon"}
                  />
                </a>
                <a
                  className='iconWrapper'
                  href={"https://github.com/bibhuprasadrout"}
                  target={"_blank"}>
                  <img
                    className='icon'
                    src={Images.github}
                    alt={"media icon"}
                  />
                </a>
                <a
                  className='iconWrapper'
                  href={"https://www.behance.net/bibhuprasadrout"}
                  target={"_blank"}>
                  <img
                    className='icon'
                    src={Images.behance}
                    alt={"media icon"}
                  />
                </a>
                <a
                  className='iconWrapper'
                  href={"https://www.instagram.com/bibhuprasadrout/"}
                  target={"_blank"}>
                  <img
                    className='icon'
                    src={Images.instagram}
                    alt={"media icon"}
                  />
                </a>
                <a
                  className='iconWrapper'
                  href={"https://twitter.com/bibhuprasadrout"}
                  target={"_blank"}>
                  <img
                    className='icon'
                    src={Images.twitter}
                    alt={"media icon"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='infoWrapper'>
            <div className='info'>
              <div className='heading'>
                <p>I'am BibhuPrasadRout and I'm a&nbsp;</p>
                <p className='personaDesignation'>{useTyper(designations)}</p>
              </div>
              <p className='profess'>
                I'm a passionate React.js Developer. I aim to build fast,
                scalable, mobile-first, foolproof websites. I enjoy stories and
                am a quick study. I welcome the opportunity to learn and aquire
                skills with open arms. With almost two years of experience as a
                web designer and then a web developer, I have a good
                understanding of react and all its helper packages and
                frameworks..
              </p>
              <AnchoredButton
                className='infoButton'
                target='_blank'
                href='https://drive.google.com/file/d/1RTBUwhAHJQnKy1PXVQnSmbUQQJ8sx2Es/view?usp=sharing'>
                Download CV&nbsp;
                <AerrowHead src={Images.playFragment} alt='right arrow' />
              </AnchoredButton>
            </div>
          </div>
        </div>
      </AboutBody>
    </>
  );
};
