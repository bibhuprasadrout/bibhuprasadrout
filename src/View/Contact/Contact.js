import styled from "styled-components";
import { Card } from "../../DesignSystem/Utils/Card/Card";
import { Images } from "../../Assets/Images";

const CardWrapper = styled.div`
  height: calc(100vh - 11rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactCard = styled(Card)`
  color: ${(props) => props.theme.light};
  border-radius: 7px;
  height: 100%;
  max-height: 13rem;
  max-width: 30rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  .email {
    font-size: 1.3rem;
    color: ${(props) => props.theme.primary};
    display: block;
    max-width: fit-content;
    margin: 0 auto;
  }
  .mediaLink {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    .iconWrapper {
      width: 2.3rem;
      height: 2.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      background-color: ${(props) => props.theme.fragment};
      .icon {
        border-radius: 0;
      }
    }
  }
`;
export const Contact = () => {
  return (
    <>
      <CardWrapper className='cardWrapper'>
        <ContactCard>
          <div>
            <div>Lets get to know eachother. Drop me a mail at...</div>
            <a href='mailto:bibhu.rs@gmail.com' className='email'>
              bibhu.rs@agmail.com
            </a>
          </div>
          <div className='mediaLink'>
            <a
              className='iconWrapper'
              href={"https://www.linkedin.com/in/bibhuprasadrout-lin/"}
              target={"_blank"}>
              <img className='icon' src={Images.linkedIn} alt={"media icon"} />
            </a>
            <a
              className='iconWrapper'
              href={"https://github.com/bibhuprasadrout"}
              target={"_blank"}>
              <img className='icon' src={Images.github} alt={"media icon"} />
            </a>
            <a
              className='iconWrapper'
              href={"https://www.behance.net/bibhuprasadrout"}
              target={"_blank"}>
              <img className='icon' src={Images.behance} alt={"media icon"} />
            </a>
            <a
              className='iconWrapper'
              href={"https://www.instagram.com/bibhuprasadrout/"}
              target={"_blank"}>
              <img className='icon' src={Images.instagram} alt={"media icon"} />
            </a>
            <a
              className='iconWrapper'
              href={"https://twitter.com/bibhuprasadrout"}
              target={"_blank"}>
              <img className='icon' src={Images.twitter} alt={"media icon"} />
            </a>
          </div>
        </ContactCard>
      </CardWrapper>
    </>
  );
};
