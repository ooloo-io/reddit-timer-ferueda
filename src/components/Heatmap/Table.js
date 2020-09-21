/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable } from 'react-table';

const StyledTable = styled.table`
  grid-area: Table;
`;

const TdButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ col, theme }) => theme.heatmap.colors[col >= 10 ? 10 : col]};
  font-size: ${({ theme }) => theme.button.fontSize};
  font-weight: bold;
  line-height: ${({ theme }) => theme.button.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing};
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  border: none;
  margin: 0;
  padding: 0;

  &:hover,
  &:focus {
    outline: 1px solid #1e2537;
    outline-offset: -1px;
  }
`;

const Table = ({ columns, data }) => {
  // eslint-disable-next-line object-curly-newline
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <StyledTable {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                const { key, role } = cell.getCellProps();

                return (
                  <td key={key} role={role}>
                    <TdButton col={cell.value} type="button">
                      {cell.render('Cell')}
                    </TdButton>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
