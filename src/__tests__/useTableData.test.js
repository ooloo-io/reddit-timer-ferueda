import { renderHook } from '@testing-library/react-hooks';
import useTableData from '../hooks/useTableData';
import { posts, formatedData, emptyData } from '../__mocks__/useTableData';

describe('Hook - useTableData', () => {
  test('transforms data from 500 posts', () => {
    const { result } = renderHook(() => useTableData(posts));

    expect(result.current.postsData).toEqual(formatedData);
    expect(result.current.tableColumns).toEqual(emptyData.columns);
    expect(result.current.tableColumns).toMatchSnapshot();
    expect(result.current.postsData).toMatchSnapshot();
  });
});
