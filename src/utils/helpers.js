import { daysArray } from '../constants/daysAndTime';

export const getDayAndTimeFromPosts = (posts) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  posts.map((post) => {
    const date = new Date(post.created_utc * 1000);
    return {
      day: daysArray[date.getDay()],
      time: date.getHours(),
    };
  });

const createBaseFrequencyObject = () => {
  const frequencyObject = {};
  const timeObject = {};

  for (let i = 0; i <= 23; i += 1) {
    timeObject[i] = 0;
  }

  daysArray.forEach((day) => {
    frequencyObject[day] = { ...timeObject };
  });

  return frequencyObject;
};

export const getFrequencyByDayAndTime = (postsData) => {
  const baseFrequencyObject = createBaseFrequencyObject();

  return postsData.reduce((acc, current) => {
    acc[current.day][current.time] += 1;

    return acc;
  }, baseFrequencyObject);
};

export const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);
