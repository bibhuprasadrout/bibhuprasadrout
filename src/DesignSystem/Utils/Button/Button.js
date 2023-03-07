import styled, { css } from "styled-components";
import { GlobalColors } from "../constants";

const Button = css`
  align-items: center;
  background-clip: padding-box;
  background-color: ${GlobalColors.solid};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${GlobalColors.fragment};
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  max-width: 13rem;
  &:hover,
  &:focus {
    background-color: transparent;
    border: 3px solid ${GlobalColors.solid};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    background-color: transparent;
    border: 3px solid ${GlobalColors.fragment};
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;

export const NormalButton = styled.button`
  ${() => Button}
`;

export const AnchoredButton = styled.a`
  ${() => Button}
`;
