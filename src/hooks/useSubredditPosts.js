import { useState, useEffect } from 'react';

const API_URL = 'https://www.reddit.com/r';
const API_SEARCH_QUERY = 'top.json?t=year&limit=100';

const fetchSubredditPosts = async (subreddit, abortController, after) => {
  const res = await fetch(`${API_URL}/${subreddit}/${API_SEARCH_QUERY}&after=${after}`, {
    signal: abortController.signal,
  });
  const { data } = await res.json();
  return { posts: data.children.map((childObj) => childObj.data), after: data.after };
};

const recursiveFetch = async (subreddit, abortController, after = '', results = []) => {
  if (after === null || results.length >= 500) {
    return results.slice(0, 500);
  }

  const data = await fetchSubredditPosts(subreddit, abortController, after);
  const newResults = [...results, ...data.posts];

  return recursiveFetch(subreddit, abortController, data.after, newResults);
};

const useSubredditPosts = (subreddit) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);
    setPosts([]);
    setError(null);

    recursiveFetch(subreddit, abortController)
      .then((results) => {
        setPosts([...results]);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        if (!abortController.signal.aborted) {
          setError(e);
          setIsLoading(false);
        }
      });

    return () => abortController.abort();
  }, [subreddit]);

  return {
    posts,
    isLoading,
    error,
  };
};

export default useSubredditPosts;
