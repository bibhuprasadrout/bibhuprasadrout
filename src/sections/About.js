import styled from "styled-components";
import { MainTitle, SubTitle, AnchoredButton } from "../styles/UIElements";
import { useTyper } from "../Hooks/useTyper";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 1rem;
  max-width: 1100px;
  margin: 0 auto;

  /* Explicitly centering the top-level section headers */
  .header {
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center; /* Ensures the background solid color on SubTitle stays centered */
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start; /* Align to the top of the grid cell */
  justify-items: center;

  @media (min-width: 64rem) {
    grid-template-columns: 1fr 1.2fr;
    justify-items: start;
  }
`;

const VisualSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Keep image and social icons centered relative to each other */
  gap: 2rem;
  width: 100%;

  .persona-wrapper {
    position: relative;
    max-width: 300px;

    &::after {
      content: "";
      position: absolute;
      top: 15px;
      left: 15px;
      right: -15px;
      bottom: -15px;
      border: 3px solid ${(props) => props.theme.secondary};
      border-radius: 30px 30px 30px 0;
      z-index: -1;
    }
  }

  .persona {
    width: 100%;
    height: auto;
    border-radius: 30px 30px 30px 0;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  /* Mobile: Center everything for a clean column look */
  text-align: center;
  align-items: center;

  @media (min-width: 64rem) {
    /* Desktop: Left-align body content for readability */
    text-align: left;
    align-items: flex-start;
  }

  .intro-heading {
    /* We keep the "Heading" part centered even on desktop or left-aligned?
       To look neatest, we left-align this part on desktop too. */
    font-size: calc(1.3rem + 0.5vw);
    font-weight: 700;
    line-height: 1.4;
    width: 100%;

    .personaDesignation {
      display: block;
      color: ${(props) => props.theme.secondary};
      font-size: calc(1.5rem + 1vw);
      min-height: 3.5rem;
    }
  }

  .profess {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #475569;
    max-width: 600px;
    /* Forces the text itself to be left-aligned while the container can be centered */
    text-align: left;
    padding: 0.5rem;
  }

  .cta-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;

    @media (min-width: 64rem) {
      justify-content: flex-start;
    }
  }
`;

const ArrowIcon = styled.img`
  height: 0.9rem;
  margin-left: 0.8rem;
`;

export const About = () => {
  const designations = [
    "React.js Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "Full Stack Developer",
  ];

  return (
    <AboutContainer id='about'>
      <div className='header'>
        <MainTitle>- Get to know me -</MainTitle>
        <SubTitle className='subTitle'>Over a cup of coffee maybe?</SubTitle>
      </div>

      <ContentLayout>
        <VisualSide>
          <div className='persona-wrapper'>
            <img
              className='persona'
              src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334977/bibhuprasadrout_xmzfz3.jpg'
              alt='Bibhu Prasad Rout'
              loading='lazy'
            />
          </div>
          <div className='social-links'>
            <a
              className='iconWrapper'
              href='https://linkedin.com/in/bibhuprasadrout-lin/'
              target='_blank'
              rel='noreferrer'>
              <img
                className='icon'
                src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334980/linkedin_mwud46.png'
                alt='LinkedIn'
                loading='lazy'
              />
            </a>
            <a
              className='iconWrapper'
              href='https://github.com/bibhuprasadrout'
              target='_blank'
              rel='noreferrer'>
              <img
                className='icon'
                src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334978/github_e8myav.png'
                alt='GitHub'
                loading='lazy'
              />
            </a>
            <a
              className='iconWrapper'
              href='https://www.behance.net/bibhuprasadrout'
              target='_blank'
              rel='noreferrer'>
              <img
                className='icon'
                src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334982/behance_fdafcw.png'
                alt='Behance'
                loading='lazy'
              />
            </a>
            <a
              className='iconWrapper'
              href='https://www.instagram.com/bibhuprasadrout/'
              target='_blank'
              rel='noreferrer'>
              <img
                className='icon'
                src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334980/instagram_w52qpc.png'
                alt='Instagram'
                loading='lazy'
              />
            </a>
            <a
              className='iconWrapper'
              href='https://twitter.com/bibhuprasadrout'
              target='_blank'
              rel='noreferrer'>
              <img
                className='icon'
                src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334981/twitter_qepkor.png'
                alt='Twitter'
                loading='lazy'
              />
            </a>
          </div>
        </VisualSide>

        <TextSide>
          <div className='intro-heading'>
            I'm Bibhu Prasad Rout and I'm a
            <span className='personaDesignation'>{useTyper(designations)}</span>
          </div>
          <p className='profess'>
            I'm a passionate <strong>React.js Developer</strong> with a focus on
            building fast, scalable, and mobile-first websites. With nearly two
            years of experience bridging the gap between design and development,
            I specialize in creating foolproof user interfaces using the modern
            React ecosystem. I'm a quick study, always eager to acquire new
            skills and stay ahead of industry standards.
          </p>
          <div className='cta-wrapper'>
            <AnchoredButton
              href='https://drive.google.com/file/d/1MU6400CWnlC4UxYjz8xmi7WyhpbFZqcr/view?usp=drive_link'
              target='_blank'
              rel='noreferrer'>
              Download CV
              <ArrowIcon
                src='https://res.cloudinary.com/dsk4p5j0o/image/upload/q_auto/f_auto/v1776334963/play_fragment_wocjlf.png'
                alt='play arrow icon'
                loading='lazy'
              />
            </AnchoredButton>
          </div>
        </TextSide>
      </ContentLayout>
    </AboutContainer>
  );
};
