import styled from "styled-components";
const FooterBody = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.fragment};
  border-radius: 0;
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
