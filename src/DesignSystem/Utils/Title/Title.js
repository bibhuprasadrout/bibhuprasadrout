import styled, { css } from "styled-components";
import { GlobalColors } from "../constants";

export const Title = css`
  color: ${GlobalColors.text_primary};
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
  background-color: ${GlobalColors.btn_primary};
`;
