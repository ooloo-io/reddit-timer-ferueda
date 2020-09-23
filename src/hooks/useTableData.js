import React from 'react';
import { daysArray } from '../constants/daysAndTime';
import { getDayAndTimeFromPosts, getFrequencyByDayAndTime } from '../utils/helpers';

const useTableData = (posts) => {
  const postsData = React.useMemo(() => {
    const frequency = getFrequencyByDayAndTime(getDayAndTimeFromPosts(posts));

    return daysArray.map((day) => frequency[day]);
  }, [posts]);

  const tableColumns = React.useMemo(() => {
    const columnsArray = [];

    for (let i = 0; i <= 23; i += 1) {
      columnsArray.push({ accessor: i.toString() });
    }

    return columnsArray;
  }, []);

  return {
    postsData,
    tableColumns,
  };
};

export default useTableData;
