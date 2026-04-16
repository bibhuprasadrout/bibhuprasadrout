import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../styles/UIElements";

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 1.5rem;

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      margin: 0 auto;
      &::after {
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  /* Balanced spacing for a cleaner look */
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const SkillCard = styled.div`
  background: ${(props) => props.theme.fragment};
  padding: 1.5rem;
  border-radius: 12px; /* Slightly less rounded for a crisp, professional look */
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  color: #64748b; /* Slate grey for a calm, simple starting state */

  /* Super subtle border to define the shape without looking "heavy" */
  border: 1px solid rgba(0, 0, 0, 0.03);

  /* Initial flat state shadow */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  transition: all 0.25s ease-out; /* Smooth, simple transition */

  &:hover {
    cursor: default;
    background: white;
    /* Soft, expansive shadow for "lift" effect */
    box-shadow: 0 10px 25px rgba(0, 74, 153, 0.06);
    color: ${(props) => props.theme.primary};
    transform: translateY(-4px); /* Very subtle lift */
  }
`;

export const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Redux",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Git",
    "Postman",
    "Styled Components",
    "REST APIs",
  ];

  return (
    <SkillsContainer id='skills'>
      <div className='section-header'>
        <SectionTitle>Technical Skills</SectionTitle>
      </div>

      <Grid>
        {skills.map((skill) => (
          <SkillCard key={skill}>{skill}</SkillCard>
        ))}
      </Grid>
    </SkillsContainer>
  );
};
