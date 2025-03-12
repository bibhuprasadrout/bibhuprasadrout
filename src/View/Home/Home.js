import styled, { keyframes } from "styled-components";
import { useTyper } from "../../Utils/Hooks/useTyper";
import { AnchoredButton } from "../../DesignSystem/Utils/Button/Button";
import { Images } from "../../Assets/Images";
const blinkerSimulator = keyframes`
  0%{
          border-right: 7px solid #DFDCE3;
  }
  90%{
          border-right: 7px solid #DFDCE3;
  }
  91%{
          border-right: 7px solid transperant;
  }
  `;
const HomeBody = styled.section`
  height: calc(100vh - 7rem);
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
  @media (min-width: 32em) {
    width: max-content;
    margin: 0 auto 0 11%;
  }
  .nameIntro {
    min-width: max-content;
    .hi {
      font-size: 1rem;
      padding: 0 0 0 0.13rem;
    }
    .name {
      font-size: calc(1.7rem + 0.7vw);
      font-weight: bold;
      color: ${(props) => props.theme.secondary};
    }
    .designation {
      font-size: calc(1rem + 0.7vw);
      display: inline-flex;
      align-items: center;
      height: 2.1rem;
      padding: 0 0 0 0.13rem;
      .typer {
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        max-width: fit-content;
        height: 2.1rem;
        padding: 0 0.17rem;
        animation: ${blinkerSimulator} linear infinite 3s alternate;
        color: ${(props) => props.theme.fragment};
      }
    }
  }
`;
const AerrowHead = styled.img`
  height: 1rem;
  padding: 0 0 0 0.7rem;
`;
export const Home = (props) => {
  const designation = [
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
  ];
  return (
    <>
      <HomeBody className='bodyContent'>
        <div className='nameIntro'>
          <p className='hi'>Hi,</p>
          <h1 className='name'>BIBHU PRASAD ROUT </h1>
          <h3 className='designation'>
            here. I'm a &nbsp;
            <span className='typer'>{useTyper(designation)}</span>
          </h3>
        </div>
        <AnchoredButton
          target={"_blank"}
          href={"https://www.linkedin.com/in/bibhuprasadrout-lin/"}>
          Looking to hire{" "}
          <AerrowHead src={Images.playFragment} alt='right arrow' />
        </AnchoredButton>
      </HomeBody>
    </>
  );
};
