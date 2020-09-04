import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ReactLogo } from './logo.svg';

const StyledDiv = styled.div`
  width: 150px;
  height: 36px;
  object-fit: contain;
`;

const Logo = () => (
  <StyledDiv>
    <ReactLogo />
  </StyledDiv>
);

export default Logo;
