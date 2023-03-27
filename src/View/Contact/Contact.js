import styled from "styled-components";
import { Card } from "../../DesignSystem/Utils/Card/Card";
const ContactCard = styled(Card)`
  color: ${(props) => props.theme.light};
  .email {
    font-size: 1.3rem;
    color: ${(props) => props.theme.dark};
    display: block;
    max-width: fit-content;
    margin: 0 auto;
  }
`;
export const Contact = () => {
  return (
    <>
      <ContactCard>
        <div>Lets get to know eachother. Drop me a mail at...</div>
        <a href="mailto:bibhu.rs@gmail.com" className="email">
          bibhu.rs@agmail.com
        </a>
      </ContactCard>
    </>
  );
};
