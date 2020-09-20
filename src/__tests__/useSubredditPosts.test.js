import { renderHook } from '@testing-library/react-hooks';
import useSubredditPosts from '../hooks/useSubredditPosts';

describe('Hook - useSubredditPosts', () => {
  test('fetches 500 posts from the Reddit API', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSubredditPosts('javascript'));

    expect(result.current.posts).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.posts).toHaveLength(500);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.posts.map((post) => post.title)).toMatchSnapshot();
  });

  test('stops fetching and returns the correct data when less than 500 posts', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSubredditPosts('lessthan500'));

    await waitForNextUpdate();

    expect(result.current.posts).toHaveLength(270);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  test('returns error when request fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSubredditPosts('failed'));

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).not.toBe(null);
  });
});
