/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
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

const Cell = React.memo(({ value, keyVal, role, render, onSelection }) => (
  <td key={keyVal} role={role}>
    <TdButton col={value} type="button" onClick={() => onSelection(keyVal)}>
      {render('Cell')}
    </TdButton>
  </td>
));

const Row = React.memo(({ row, activeCell, handleCellSelection }) => {
  const cells = React.useMemo(() => row.cells, [row]);
  return (
    <tr {...row.getRowProps()}>
      {cells.map((cell) => {
        const { key, role } = cell.getCellProps();
        return (
          <Cell
            key={key}
            keyVal={key}
            value={cell.value}
            role={role}
            render={cell.render}
            onSelection={handleCellSelection}
            isActive={key === activeCell ? true : undefined}
          />
        );
      })}
    </tr>
  );
});

const Table = ({ columns, data }) => {
  // eslint-disable-next-line object-curly-newline
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const [activeCell, setActiveCell] = useState(null);

  const handleCellSelection = useCallback((key) => setActiveCell(key), []);

  const memoizedRows = React.useMemo(() => rows, [rows]);
  return (
    <StyledTable {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {memoizedRows.map((row) => {
          prepareRow(row);
          return (
            <Row
              key={row.id}
              row={row}
              activeCell={activeCell}
              handleCellSelection={handleCellSelection}
            />
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

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  keyVal: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
};

Row.propTypes = {
  row: PropTypes.shape({
    cells: PropTypes.arrayOf(PropTypes.object).isRequired,
    getRowProps: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  activeCell: PropTypes.string,
  handleCellSelection: PropTypes.func.isRequired,
};

export default Table;
