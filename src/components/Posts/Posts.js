import React from 'react';
import {} from 'react-router-dom';
import styled from 'styled-components';

import Table from './Table';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

const SectionHeadline = styled.h2`
  text-align: left;
  margin-right: auto;
  width: 60px;
  height: 28px;
  font-size: ${({ theme }) => theme.font.size.sectionHeader};
  color: ${({ theme }) => theme.color.black};
`;

const TableContainer = styled.div`
  max-width: 786px;
`;

const Posts = () => {
  return (
    <Wrapper>
      <TableContainer>
        <SectionHeadline>Posts</SectionHeadline>
        <Table />
      </TableContainer>
    </Wrapper>
  );
};

export default Posts;
