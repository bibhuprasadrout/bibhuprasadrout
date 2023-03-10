import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  AnchoredButton,
  NormalButton,
} from "../../../../DesignSystem/Utils/Button/Button";
import { RESOURCES_API_URL } from "../../../../Utils/config";
import { Card } from "../../../../DesignSystem/Utils/Card/Card";
import { Paragraph } from "../../../../DesignSystem/Utils/Paragraph/Paragraph";
const Outlet = styled.div`
  width: 100%;
  margin: 1.5rem 0 0;
  max-height: 25rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const CallToAction = styled(Card)`
  width: calc(100%-2rem);
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 1rem 0.7rem;
  background-color: ${(props) => props.theme.dark};
  .iamFeelingLucky {
    grid-column: span 2;
    margin: 0 auto;
    width: 100%;
    max-width: none;
    font-size: 1.7rem;
  }
  .tutorials {
    justify-self: end;
  }
  .others {
    justify-self: start;
  }
`;
const IamFeelingLucky = styled(Card)`
  width: calc(100% - 2rem);
  background-color: ${(props) => props.theme.dark};
  margin: 0 0 1rem;

  .description {
    font-size: 1.3rem;
  }
  .types {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.3rem;
    .type {
      background-color: ${(props) => props.theme.dark};
      width: fit-content;
      font-size: 1.17rem;
    }
  }
  .topics {
    .heading {
      font-size: 1rem;
      font-weight: bold;
      padding: 0.5rem 0 0.3rem 0.5rem;
    }
    .topic {
      font-size: 1rem;
      padding: 0.1rem 0 0.1rem 1rem;
    }
  }
  .actions {
    padding: 1rem 0 0;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
`;
const Tutorials = styled(IamFeelingLucky)``;
const Others = styled(IamFeelingLucky)``;

export const TutorialFinderOutLet = () => {
  const stateList = ["CallToAction", "IamFeelingLucky", "Tutorials", "Others"];
  const [resources, setResources] = useState([]);
  const [outletState, setOutletState] = useState(stateList[0]);
  const [luckyResource, setLuckyResource] = useState({});
  const [tutorials, setTutorials] = useState([]);
  const [others, setOthers] = useState([]);
  const navigateToCallToAction = () => {
    setOutletState(stateList[0]);
  };
  const navigateToLuck = () => {
    setOutletState(stateList[1]);
    const dataLength = resources.length;
    const luckyItem = resources[Math.floor(Math.random() * dataLength)];
    setLuckyResource(luckyItem);
  };
  const navigateToTutorials = () => {
    setOutletState(stateList[2]);
    const allTutorials = resources.filter(
      (item) => item.types[0] === "tutorial"
    );
    setTutorials(allTutorials);
  };
  const navigateToOthers = () => {
    setOutletState(stateList[3]);
    const allOtherss = resources.filter((item) => item.types[0] != "tutorial");
    setOthers(allOtherss);
  };
  const resourcesUrl = RESOURCES_API_URL;
  const getResourcesData = async () => {
    const resourcesData = await fetch(RESOURCES_API_URL);
    const json = await resourcesData.json();
    setResources(json);
  };
  useEffect(() => {
    getResourcesData();
  }, []);
  if (outletState === stateList[0]) {
    return (
      <Outlet>
        <CallToAction className="card">
          <NormalButton className="iamFeelingLucky" onClick={navigateToLuck}>
            I am feeling lucky
          </NormalButton>
          <NormalButton className="tutorials" onClick={navigateToTutorials}>
            Tutorials
          </NormalButton>
          <NormalButton className="others" onClick={navigateToOthers}>
            Others
          </NormalButton>
        </CallToAction>
      </Outlet>
    );
  } else if (outletState === stateList[1]) {
    return (
      <Outlet>
        <IamFeelingLucky>
          <Paragraph className="description">
            {luckyResource?.description}
          </Paragraph>
          <div className="types">
            {luckyResource?.types.map((type) => {
              return <Paragraph className="type">{type}</Paragraph>;
            })}
          </div>
          <div className="topics">
            <Paragraph className="heading">Topics:</Paragraph>
            {luckyResource?.topics.map((topic) => {
              return <Paragraph className="topic">- {topic}</Paragraph>;
            })}
          </div>
          <div className="actions">
            <AnchoredButton href={luckyResource?.url} target={"_blank"}>
              Check it out
            </AnchoredButton>
            <NormalButton onClick={navigateToCallToAction}>Back</NormalButton>
          </div>
        </IamFeelingLucky>
      </Outlet>
    );
  } else if (outletState === stateList[2]) {
    return (
      <Outlet>
        {tutorials.map((item) => {
          return (
            <Tutorials key={item?.id + item?.description}>
              <Paragraph className="description">{item?.description}</Paragraph>
              <div className="topics">
                <Paragraph className="heading">Topics:</Paragraph>
                {item?.topics.map((topic) => {
                  return <Paragraph className="topic">- {topic}</Paragraph>;
                })}
              </div>
              <div className="actions">
                <AnchoredButton href={item?.url} target={"_blank"}>
                  Check it out
                </AnchoredButton>
                <NormalButton onClick={navigateToCallToAction}>
                  Back
                </NormalButton>
              </div>
            </Tutorials>
          );
        })}
      </Outlet>
    );
  } else if (outletState === stateList[3]) {
    return (
      <Outlet>
        {others.map((item) => {
          return (
            <Others key={item?.id + item?.description}>
              <Paragraph className="description">{item?.description}</Paragraph>
              <div className="types">
                {item?.types.map((type) => {
                  return <Paragraph className="type">{type}</Paragraph>;
                })}
              </div>{" "}
              <div className="topics">
                <Paragraph className="heading">Topics:</Paragraph>
                {item?.topics.map((topic) => {
                  return <Paragraph className="topic">- {topic}</Paragraph>;
                })}
              </div>
              <div className="actions">
                <AnchoredButton href={item?.url} target={"_blank"}>
                  Check it out
                </AnchoredButton>
                <NormalButton onClick={navigateToCallToAction}>
                  Back
                </NormalButton>
              </div>
            </Others>
          );
        })}
      </Outlet>
    );
  }
};
