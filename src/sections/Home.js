import styled from "styled-components";
import { useTyper } from "../Hooks/useTyper";

const Hero = styled.div`
  text-align: center;
  .hi {
    color: ${(props) => props.theme.secondary};
    font-weight: bold;
  }
  .name {
    color: ${(props) => props.theme.primary};
    margin: 0.5rem 0;
  }
`;

export const Home = () => {
  const text = useTyper([
    "React Developer",
    "MERN Developer",
    "UI/UX Enthusiast",
    "Full Stack Engineer",
  ]);
  return (
    <Hero>
      <p className='hi'>Hi, my name is</p>
      <h1 className='name' style={{ fontSize: "4rem" }}>
        BIBHU PRASAD ROUT
      </h1>
      <h2>
        I'm a <span style={{ color: "#0078FF" }}>{text}</span>
      </h2>
      <br />
      <a
        href='#projects'
        style={{
          background: "#004A99",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "50px",
          fontWeight: "bold",
        }}>
        View My Work
      </a>
    </Hero>
  );
};
