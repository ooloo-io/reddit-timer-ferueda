import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

import HeroTable from './HeroTable';
import Button from '../shared/Button';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainHeadline = styled.h1`
  text-align: center;
  min-height: 46px;
  font-size: ${({ theme }) => theme.font.size.headline};
  margin-top: 27px;
  margin-bottom: 20px;
`;

const SubHeadline = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.font.size.default};
  color: ${({ theme }) => theme.color.grayBase};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.default};
  min-height: 19px;
`;

const CtaButton = styled(Button)`
  margin: 46px auto;
`;

const Subreddit = styled.p`
  width: 91px;
  height: 19px;
  font-weight: 500;
  margin-bottom: 37px;
`;

const Hero = () => (
  <Wrapper>
    <MainHeadline>No reactions to your reddit posts?</MainHeadline>
    <SubHeadline>
      Great timing, great results! Find the best time to post on your subreddit.
    </SubHeadline>
    <CtaButton to={{ pathname: ROUTES.SEARCH, search: ROUTES.DEFAULT_QUERY }}>
      Show me the best time
    </CtaButton>
    <Subreddit>r/javascript</Subreddit>
    <Link to={{ pathname: ROUTES.SEARCH, search: ROUTES.DEFAULT_QUERY }}>
      <HeroTable />
    </Link>
  </Wrapper>
);

export default Hero;
