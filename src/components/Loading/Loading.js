import React from 'react';
import styled from 'styled-components';
import spinner from './loading-spinner.svg';

const Wrapper = styled.div`
  width: 71px;
  height: 71px;
  margin: 56px auto 0 auto;
`;

const Image = styled.img`
  object-fit: contain;
  animation: spinner 1.5s infinite linear;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
`;

const Loading = () => (
  <Wrapper>
    <Image src={spinner} alt="loading spinner" />
  </Wrapper>
);

export default Loading;
