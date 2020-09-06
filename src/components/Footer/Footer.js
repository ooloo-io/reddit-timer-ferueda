import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

import Logo from './Logo';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 250px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  height: 18px;
  width: 112px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledAnchor = styled.a`
  font-size: 14px;
  height: 18px;
  width: 55px;
  letter-spacing: normal;
  line-height: normal;
`;

const Footer = () => (
  <Wrapper>
    <StyledAnchor href="https://ooloo.io/employers" target="_blank" rel="noopener noreferrer">
      ooloo.io
    </StyledAnchor>
    <Link to={ROUTES.HOME}>
      <Logo />
    </Link>
    <StyledLink to={ROUTES.TERMS}>Terms & Privacy</StyledLink>
  </Wrapper>
);

export default Footer;
