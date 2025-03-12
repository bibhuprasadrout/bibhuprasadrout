import styled from "styled-components";
import { Card } from "../../../../DesignSystem/Utils/Card/Card";
import {
  CardTitle,
  CardSubTitle,
} from "../../../../DesignSystem/Utils/Title/Title";
import { TutorialFinderOutLet } from "../TutorialFinderOutlet/TutorialFinderOutlet";
const LandingBody = styled.div`
  .card {
    margin: 0 auto;
    max-height: 100%;
    border-radius: 7px;
    .title {
      .mainTitle {
        padding: 0 0 0.3rem 0;
        margin: 0 auto 0 0;
      }
      .subTitle {
        margin: 0 auto 0 0;
      }
    }
  }
`;
export const TutorialFinder = () => {
  return (
    <>
      <LandingBody>
        <Card className="card">
          <div className="title">
            <CardTitle className="mainTitle">
              Want to learn coading too!!
            </CardTitle>
            <CardSubTitle className="subTitle">
              Let's get us started...
            </CardSubTitle>
          </div>
          <TutorialFinderOutLet />
        </Card>
      </LandingBody>
    </>
  );
};
