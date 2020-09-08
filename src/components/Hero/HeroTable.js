import React from 'react';
import styled from 'styled-components';
import table from './table.png';
import table2x from './table@2x.png';
import table3x from './table@3x.png';

const Wrapper = styled.div`
  object-fit: contain;
  max-width: 1114px;
`;

const HeroTable = () => (
  <Wrapper>
    <img src={table} srcSet={`${table2x} 2x, ${table3x} 3x`} alt="hero table" />
  </Wrapper>
);

export default HeroTable;
