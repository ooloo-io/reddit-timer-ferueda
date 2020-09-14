import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const Row = styled.div`
  margin: 0 auto;
  width: 738px;
  min-height: 81px;
`;

const FirstRow = styled(Row)`
  margin-top: 133px;
`;

const SecondRow = styled(Row)`
  margin-top: 105px;
`;

const SectionHeader = styled.h2`
  text-align: left;
`;

const List = styled.ul`
  margin-top: 13px;
`;

const ListItem = styled.li`
  line-height: ${({ theme }) => theme.font.lineHeight.default};
`;

const Text = styled.p`
  margin-top: 13px;
`;

const scrollToSection = (el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' });

const InfoSection = () => {
  const location = useLocation();

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    if (location.hash === ROUTES.HOWITWORKS && location.state.fromNav) {
      scrollToSection(firstRowRef.current);
    }

    if (location.hash === ROUTES.ABOUT && location.state.fromNav) {
      scrollToSection(secondRowRef.current);
    }
  }, [location]);

  return (
    <Wrapper>
      <FirstRow>
        <SectionHeader ref={firstRowRef}>How it works</SectionHeader>
        <List>
          <ListItem>• We find the 500 top posts from the past year for a subreddit.</ListItem>
          <ListItem>
            • The data is visualized in a heatmap grouped by weekday and hour of the day.
          </ListItem>
          <ListItem>• See immediately when to submit your reddit post.</ListItem>
        </List>
      </FirstRow>

      <SecondRow>
        <SectionHeader ref={secondRowRef}>About</SectionHeader>
        <Text>
          This app was created during a course on&nbsp;
          <a href={ROUTES.OOLOO} target="_blank" rel="noopener noreferrer">
            ooloo.io
          </a>
          &nbsp;with the goal to implement a pixel-perfect real-world application with professional
          workflows and tools like Kanban, ClickUp, Zeplin, GitHub, pull requests and code
          reviews.&nbsp;
          <a href={`${ROUTES.OOLOO}/employers`} target="_blank" rel="noopener noreferrer">
            Click here for more information.
          </a>
        </Text>
      </SecondRow>
    </Wrapper>
  );
};

export default InfoSection;
