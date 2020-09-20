import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Table from './Table';

import useTableData from '../../hooks/useTableData';

import { daysArray, hoursArray } from '../../constants/daysAndTime';
import { capitalizeWord } from '../../utils/helpers';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-areas: '. ColumnHeader' 'RowHeader Table';
`;

const ColumnHeaderContainer = styled.ul`
  grid-area: ColumnHeader;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 960px;
  height: 52px;
  background-image: linear-gradient(to bottom, #fefefe, #e9e9e9);
  border: solid 1px #f3f3f3;
`;

const ColumnHeaderItem = styled.li`
  width: 80px;
  height: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #787878;
`;

const RowHeaderContainer = styled.ul`
  grid-area: RowHeader;
  display: flex;
  flex-direction: column;
  width: 154px;
  background-color: #1e2537;
`;

const RowHeaderItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  line-height: 0.73;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const TimezoneText = styled.p`
  margin-top: 12px;
  height: 18px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.color.grayBase};
`;

const TimezoneSpan = styled.span`
  font-weight: bold;
`;

const Heatmap = ({ posts }) => {
  const { postsData, tableColumns } = useTableData(posts);

  return (
    <Wrapper>
      <TableGrid>
        <ColumnHeaderContainer>
          {hoursArray.map((hour) => (
            <ColumnHeaderItem key={hour}>{hour}</ColumnHeaderItem>
          ))}
        </ColumnHeaderContainer>

        <RowHeaderContainer>
          {daysArray.map((day) => (
            <RowHeaderItem key={day}>{capitalizeWord(day)}</RowHeaderItem>
          ))}
        </RowHeaderContainer>

        <Table data={postsData} columns={tableColumns} />
      </TableGrid>

      <TimezoneText>
        All times are shown in your timezone:&nbsp;
        <TimezoneSpan>{Intl.DateTimeFormat().resolvedOptions().timeZone}</TimezoneSpan>
      </TimezoneText>
    </Wrapper>
  );
};

Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Heatmap;
