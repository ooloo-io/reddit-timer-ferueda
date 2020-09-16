import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

import Info from './Info';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 28px auto 0 auto;
  padding: 0 20px;
`;

const scrollToSection = (el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' });

const InfoSection = () => {
  const location = useLocation();

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (location.hash === ROUTES.HOWITWORKS && location.state.fromNav) {
        scrollToSection(firstRowRef.current);
      }

      if (location.hash === ROUTES.ABOUT && location.state.fromNav) {
        scrollToSection(secondRowRef.current);
      }
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [location]);

  return (
    <Wrapper>
      <Info heading="How it works" ref={firstRowRef}>
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
      </Info>

      <Info heading="About" ref={secondRowRef}>
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
      </Info>
    </Wrapper>
  );
};

export default InfoSection;
