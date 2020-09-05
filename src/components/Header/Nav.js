import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

const ListWrapper = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:first-child):not(:last-child) {
    margin: 0 25px;
  }
`;

const Nav = () => (
  <nav>
    <ListWrapper>
      <ListItem>
        <Link to={{ pathname: ROUTES.SEARCH, search: 'subreddit=javascript' }}>Search</Link>
      </ListItem>
      <ListItem>
        <Link to={`${ROUTES.HOME}${ROUTES.HOWITWORKS}`}>How it works</Link>
      </ListItem>
      <ListItem>
        <Link to={`${ROUTES.HOME}${ROUTES.ABOUT}`}>About</Link>
      </ListItem>
    </ListWrapper>
  </nav>
);

export default Nav;
