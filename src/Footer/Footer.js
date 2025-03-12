import styled from "styled-components";
const FooterBody = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.fragment};
`;
const FooterText = styled.span`
  font-size: 0.87rem;
  @media (min-width: 48em) {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }
`;
export const Footer = () => {
  return (
    <>
      <FooterBody>
        <FooterText>
          Created By
          <a
            href="https://www.linkedin.com/in/bibhuprasadrout-lin/"
            target="_blank"
          >
            {` Bibhu Prasad Rout `}
          </a>
          | © 2023 All rights reserved
        </FooterText>
      </FooterBody>
    </>
  );
};
