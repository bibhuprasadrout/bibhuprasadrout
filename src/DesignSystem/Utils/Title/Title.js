import styled, { css } from "styled-components";
import { GlobalColors } from "../constants";

export const Title = css`
  color: ${GlobalColors.fragment};
  font-size: calc(1.5rem + 3vw);
  max-width: fit-content;
  margin: 0 auto;
  padding: ${(props) => props.padding};
`;

export const MainTitle = styled.p`
  ${() => Title}
  padding: 1.5rem 1.5rem .3rem 1.5rem;
`;
export const SubTitle = styled(MainTitle)`
  color: ${GlobalColors.secondary};
  font-size: calc(1rem + 1vw);
  padding: 0.3rem 0.5rem;
  background-color: ${GlobalColors.solid};
`;
export const SectionTitle = styled(MainTitle)`
  color: ${(props) => props.theme.fragment};
  font-size: calc(1.5rem + 1vw);
  font-weight: bold;
  padding: 0.5rem 0;
  margin: 0;
`;
export const SectionSubTitle = styled(MainTitle)`
  color: ${(props) => props.theme.fragment};
  font-size: calc(1.5rem + 0.3vw);
  padding: 0 0 0.5rem;
  margin: 0;
`;
export const CardTitle = styled(MainTitle)`
  color: ${(props) => props.theme.fragment};
  font-size: calc(1rem + 1vw);
  font-weight: bold;
  padding: 0.5rem 0;
  margin: 0;
`;
export const CardSubTitle = styled(MainTitle)`
  color: ${(props) => props.theme.fragment};
  font-size: calc(1rem + 0.3vw);
  padding: 0;
  margin: 0;
`;
