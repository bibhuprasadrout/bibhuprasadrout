import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Images } from "../../Assets/Images";
import { NormalButton } from "../../DesignSystem/Utils/Button/Button";
const SkillsBody = styled.ul`
  padding: 3rem 1rem 1rem;
  height: calc(100vh - 11rem);
  max-width: 37rem;
  margin: 0 auto;
`;
const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: flex-start;
  gap: 1rem;
  .skill {
    height: 3rem;
  }
  span {
    grid-column: span 3;
  }
  .skillsAction {
    grid-column: span 2;
    justify-self: center;
    max-width: calc(37rem - 0.5fr);
    margin: 1rem 0;
  }
`;
const AerrowHead = styled.img`
  height: 1rem;
  padding: 0 0 0 0.7rem;
`;
export const Skills = () => {
  const navigate = useNavigate();
  return (
    <>
      <SkillsBody>
        <SkillList className='skills'>
          <img
            key='1'
            className='skill'
            src={Images.reactDark}
            alt='skill icon'
          />
          <img key='2' className='skill' src={Images.git} alt='skill icon' />
          <img key='3' className='skill' src={Images.html} alt='skill icon' />
          <img key='4' className='skill' src={Images.css} alt='skill icon' />
          <img
            key='5'
            className='skill'
            src={Images.javascript}
            alt='skill icon'
          />
          <img key='6' className='skill' src={Images.redux} alt='skill icon' />
          <img key='7' className='skill' src={Images.sass} alt='skill icon' />
          <img
            key='8'
            className='skill'
            src={Images.styledComponents}
            alt='skill icon'
          />
          <img
            key='9'
            className='skill'
            src={Images.tailwindDark}
            alt='skill icon'
          />
          <img
            key='10'
            className='skill'
            src={Images.postman}
            alt='skill icon'
          />
          <img
            key='11'
            className='skill'
            src={Images.figmaDark}
            alt='skill icon'
          />
          <img key='12' className='skill' src={Images.jest} alt='skill icon' />
          <img
            key='13'
            className='skill'
            src={Images.nodeJsDark}
            alt='skill icon'
          />
          <img
            key='14'
            className='skill'
            src={Images.expressJsDark}
            alt='skill icon'
          />
          <img
            key='15'
            className='skill'
            src={Images.jQuery}
            alt='skill icon'
          />
          <img
            key='16'
            className='skill'
            src={Images.illustrator}
            alt='skill icon'
          />
          <img
            key='17'
            className='skill'
            src={Images.photoshop}
            alt='skill icon'
          />
          <span></span>
          <NormalButton
            className='skillsAction'
            onClick={() => navigate("/projects")}>
            Projects&nbsp;
            <AerrowHead src={Images.playFragment} alt='right arrow' />
          </NormalButton>
        </SkillList>
      </SkillsBody>
    </>
  );
};
