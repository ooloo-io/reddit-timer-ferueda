import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

import Logo from './Logo';
import Nav from './Nav';

const StyledHeader = styled.header`
  display: flex;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem 5rem;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <Link to={ROUTES.HOME}>
      <Logo />
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;
