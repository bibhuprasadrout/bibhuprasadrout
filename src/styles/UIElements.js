import styled, { css } from "styled-components";

// --- TITLES & TYPOGRAPHY ---
export const TitleBase = css`
  color: ${(props) => props.theme.dark};
  font-family: "Inter", sans-serif;
  margin: 0;
  max-width: fit-content;
`;

export const MainTitle = styled.h1`
  ${TitleBase}
  /* Fluid Typography: Grows with screen width */
  font-size: calc(2rem + 1.5vw);
  font-weight: 800;
  letter-spacing: -0.02em;
  padding: 1rem 0;
`;

export const SubTitle = styled.h2`
  ${TitleBase}
  color: ${(props) => props.theme.secondary};
  font-size: calc(1rem + 0.5vw);
  font-weight: 500;
  background-color: ${(props) => props.theme.solid};
  padding: 0.4rem 1rem;
  border-radius: 8px;
`;

export const SectionTitle = styled.h2`
  ${TitleBase}
  font-size: calc(1.5rem + 1vw);
  font-weight: 700;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: ${(props) => props.theme.secondary};
    border-radius: 2px;
  }
`;

export const Paragraph = styled.p`
  color: #475569;
  font-size: 1.1rem;
  line-height: 1.7;
  padding: 0.5rem 0;
  text-align: left;
  /* Ch limits width for readability on wide monitors */
  max-width: 75ch;
`;

// --- BUTTONS ---
const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.fragment};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  width: fit-content;

  /* Large touch targets for mobile */
  min-height: 3rem;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.secondary};
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const NormalButton = styled.button`
  ${ButtonStyles}
`;
export const AnchoredButton = styled.a`
  ${ButtonStyles}
`;

// --- CARDS ---
export const Card = styled.div`
  background-color: ${(props) => props.theme.fragment};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  margin: 1rem 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
    border-color: ${(props) => props.theme.solid};
  }

  /* Responsive padding for smaller screens */
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const CardTitle = styled.h3`
  ${TitleBase}
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.5rem 0;
`;

export const CardSubTitle = styled.p`
  ${TitleBase}
  color: #64748b;
  font-size: 1rem;
  font-weight: 400;
`;
