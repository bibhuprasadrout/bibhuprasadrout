import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Card,
  Paragraph,
  AnchoredButton,
  NormalButton,
} from "../../styles/UIElements";
import { RESOURCES_API_URL } from "../../Utils/config";

const Outlet = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  /* FIXED HEIGHT LOGIC */
  max-height: 450px; /* Adjust this height as needed */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal jitter */

  padding-right: 10px; /* Space for the scrollbar */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* CUSTOM MODERN SCROLLBAR */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.light};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.border};
    border-radius: 10px;
    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.border}
    ${(props) => props.theme.light};
`;

const CallToAction = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* Stacked on mobile */
  gap: 1rem;

  @media (min-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }

  .iamFeelingLucky {
    grid-column: 1 / -1; /* Always spans full width */
    font-size: 1.2rem;
    width: 100%;
  }

  .tutorials,
  .others {
    width: 100%;
  }
`;

const ResourceCard = styled(Card)`
  background-color: ${(props) => props.theme.fragment};
  border: 1px solid ${(props) => props.theme.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  padding: 1.5rem;
  text-align: left;

  .description {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${(props) => props.theme.dark};
    margin-bottom: 1rem;
  }

  .types {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .type {
      background-color: ${(props) => props.theme.solid};
      color: ${(props) => props.theme.primary};
      padding: 0.2rem 0.8rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: bold;
    }
  }

  .topics {
    margin-bottom: 1.5rem;
    .heading {
      font-size: 0.9rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #64748b;
      margin-bottom: 0.5rem;
    }
    .topic-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .topic {
      font-size: 0.9rem;
      color: #475569;
      background: #f1f5f9;
      padding: 0.1rem 0.5rem;
      border-radius: 4px;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    button {
      background-color: transparent;
      color: ${(props) => props.theme.primary};
      border: 1px solid ${(props) => props.theme.primary};

      &:hover {
        background-color: ${(props) => props.theme.solid};
      }
    }
  }
`;

export const TutorialFinderOutLet = () => {
  const stateList = ["CallToAction", "IamFeelingLucky", "Tutorials", "Others"];
  const [resources, setResources] = useState([]);
  const [outletState, setOutletState] = useState(stateList[0]);
  const [luckyResource, setLuckyResource] = useState({});
  const [tutorials, setTutorials] = useState([]);
  const [others, setOthers] = useState([]);

  const navigateToCallToAction = () => setOutletState(stateList[0]);

  const navigateToLuck = () => {
    setOutletState(stateList[1]);
    const luckyItem = resources[Math.floor(Math.random() * resources.length)];
    setLuckyResource(luckyItem);
  };

  const navigateToTutorials = () => {
    setOutletState(stateList[2]);
    setTutorials(resources.filter((item) => item.types[0] === "tutorial"));
  };

  const navigateToOthers = () => {
    setOutletState(stateList[3]);
    setOthers(resources.filter((item) => item.types[0] !== "tutorial"));
  };

  useEffect(() => {
    const getResourcesData = async () => {
      try {
        const response = await fetch(RESOURCES_API_URL);
        const json = await response.json();
        setResources(json);
      } catch (err) {
        console.error("TutorialFinder Error:", err.message);
      }
    };
    getResourcesData();
  }, []);

  const renderResource = (item) => (
    <ResourceCard key={item?.id + item?.description}>
      <Paragraph className='description'>{item?.description}</Paragraph>
      <div className='types'>
        {item?.types?.map((type) => (
          <span key={type} className='type'>
            {type}
          </span>
        ))}
      </div>
      <div className='topics'>
        <p className='heading'>Topics</p>
        <div className='topic-list'>
          {item?.topics?.map((topic) => (
            <span key={topic} className='topic'>
              # {topic}
            </span>
          ))}
        </div>
      </div>
      <div className='actions'>
        <AnchoredButton href={item?.url} target='_blank'>
          Explore
        </AnchoredButton>
        <NormalButton onClick={navigateToCallToAction}>Back</NormalButton>
      </div>
    </ResourceCard>
  );

  return (
    <Outlet>
      {outletState === stateList[0] && (
        <CallToAction>
          <NormalButton className='iamFeelingLucky' onClick={navigateToLuck}>
            I'm Feeling Lucky
          </NormalButton>
          <NormalButton className='tutorials' onClick={navigateToTutorials}>
            Tutorials
          </NormalButton>
          <NormalButton className='others' onClick={navigateToOthers}>
            Other Resources
          </NormalButton>
        </CallToAction>
      )}

      {outletState === stateList[1] && renderResource(luckyResource)}
      {outletState === stateList[2] && tutorials.map(renderResource)}
      {outletState === stateList[3] && others.map(renderResource)}
    </Outlet>
  );
};
