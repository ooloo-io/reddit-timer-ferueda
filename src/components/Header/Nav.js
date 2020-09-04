import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

const StyledList = styled.ul`
  display: flex;
  color: var(--brownish-grey);
  font-weight: 400;

  li:not(:first-child):not(:last-child) {
    margin: 0 12.5px;
  }

  a {
    text-decoration: none;
    &:active,
    &:visited,
    &:link {
      color: inherit;
    }
  }
`;

const Nav = () => (
  <nav>
    <StyledList>
      <li>
        <Link to={{ pathname: ROUTES.SEARCH, search: 'q=javascript' }}>Search</Link>
      </li>
      <li>
        <Link to={`${ROUTES.HOME}${ROUTES.HOWITWORKS}`}>How it works</Link>
      </li>
      <li>
        <Link to={`${ROUTES.HOME}${ROUTES.ABOUT}`}>About</Link>
      </li>
    </StyledList>
  </nav>
);

export default Nav;
