import styled from "styled-components";
import { Images } from "../Assets/Images";

const FooterBody = styled.footer`
  width: 100%;
  background-color: ${(props) =>
    props.theme.light}; /* Muted Slate Background */
  padding: 4rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  border-top: 1px solid ${(props) => props.theme.border};
`;

const ContactInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .cta-text {
    font-size: 1.2rem;
    color: #334155; /* Deep Slate */
    font-weight: 500;
  }

  .email {
    font-size: calc(1.3rem + 0.5vw);
    color: ${(props) => props.theme.primary};
    font-weight: 800;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;

  .iconWrapper {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: ${(props) =>
      props.theme.fragment}; /* Pure White Icon Card */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 74, 153, 0.1);
      border-color: ${(props) => props.theme.secondary};
    }

    .icon {
      width: 1.4rem;
      height: auto;
    }
  }
`;

const CopyrightSection = styled.div`
  width: 100%;
  max-width: 1100px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 2rem;
  text-align: center;

  .copyright-text {
    font-size: 0.9rem;
    color: #64748b; /* Lighter Slate */

    a {
      text-decoration: none;
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      &:hover {
        color: ${(props) => props.theme.secondary};
      }
    }
  }
`;

export const Footer = () => {
  const socials = [
    {
      id: "li",
      link: "https://www.linkedin.com/in/bibhuprasadrout-lin/",
      img: Images.linkedIn,
    },
    {
      id: "gh",
      link: "https://github.com/bibhuprasadrout",
      img: Images.github,
    },
    {
      id: "bh",
      link: "https://www.behance.net/bibhuprasadrout",
      img: Images.behance,
    },
    {
      id: "ig",
      link: "https://www.instagram.com/bibhuprasadrout/",
      img: Images.instagram,
    },
    {
      id: "tw",
      link: "https://twitter.com/bibhuprasadrout",
      img: Images.twitter,
    },
  ];

  return (
    <FooterBody id='contact'>
      <ContactInfo>
        <p className='cta-text'>
          Let’s get to know each other. Drop me a mail at...
        </p>
        <a href='mailto:bibhu.rs@gmail.com' className='email'>
          bibhu.rs@gmail.com
        </a>
      </ContactInfo>

      <SocialLinks>
        {socials.map((item) => (
          <a
            key={item.id}
            className='iconWrapper'
            href={item.link}
            target='_blank'
            rel='noreferrer'>
            <img className='icon' src={item.img} alt='social icon' />
          </a>
        ))}
      </SocialLinks>

      <CopyrightSection>
        <p className='copyright-text'>
          Created By
          <a
            href='https://www.linkedin.com/in/bibhuprasadrout-lin/'
            target='_blank'
            rel='noreferrer'>
            {` Bibhu Prasad Rout `}
          </a>
          | © 2026 All rights reserved
        </p>
      </CopyrightSection>
    </FooterBody>
  );
};
