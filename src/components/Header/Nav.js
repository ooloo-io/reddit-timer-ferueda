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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.brownishGray};
`;

const Nav = () => (
  <nav>
    <ListWrapper>
      <ListItem>
        <StyledLink to={{ pathname: ROUTES.SEARCH, search: ROUTES.DEFAULT_QUERY }}>
          Search
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink
          to={{ pathname: ROUTES.HOME, hash: ROUTES.HOWITWORKS, state: { fromNav: true } }}
        >
          How it works
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={{ pathname: ROUTES.HOME, hash: ROUTES.ABOUT, state: { fromNav: true } }}>
          About
        </StyledLink>
      </ListItem>
    </ListWrapper>
  </nav>
);

export default Nav;
