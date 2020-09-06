import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

import Logo from './Logo';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.footer.height};
  width: 100%;
  max-width: calc(var(--container-width) - 500px + 40px);
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  flex: 1;
  font-size: 14px;
  height: 18px;
  letter-spacing: normal;
  line-height: normal;
`;

const RightLink = styled(StyledLink)`
  text-align: right;
  width: 112px;
`;

const LeftLink = styled(StyledLink)`
  text-align: left;
  width: 55px;
`;

const Footer = () => (
  <Wrapper>
    <LeftLink as="a" href="https://ooloo.io/employers" target="_blank" rel="noopener noreferrer">
      ooloo.io
    </LeftLink>
    <Link to={ROUTES.HOME}>
      <Logo />
    </Link>
    <RightLink to={ROUTES.TERMS}>Terms & Privacy</RightLink>
  </Wrapper>
);

export default Footer;
