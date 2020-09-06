import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReactLogo } from './logo.svg';

const Wrapper = styled.div`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const Logo = () => (
  <Wrapper role="img" aria-label="reddit timer small logo">
    <ReactLogo />
  </Wrapper>
);

export default Logo;
