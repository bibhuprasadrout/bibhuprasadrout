import styled, { css } from "styled-components";

const BaseTitle = css`
  color: ${(props) => props.theme.dark};
  text-align: center;
  margin-bottom: 1rem;
`;

export const MainTitle = styled.h1`
  ${BaseTitle}
  font-size: calc(2rem + 2vw);
  font-weight: 800;
`;

export const SectionTitle = styled.h2`
  ${BaseTitle}
  font-size: calc(1.5rem + 1vw);
  position: relative;
  padding-bottom: 10px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: ${(props) => props.theme.secondary};
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.dark};
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
`;
