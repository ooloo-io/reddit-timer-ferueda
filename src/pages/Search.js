import React from 'react';
import { useLocation } from 'react-router-dom';

import SubredditForm from '../components/SubredditForm/SubredditForm';
import Heatmap from '../components/Heatmap/Heatmap';
import Posts from '../components/Posts/Posts';
import Loading from '../components/Loading/Loading';
import ErrorMessage from '../components/shared/ErrorMessage';

import useSubredditPosts from '../hooks/useSubredditPosts';

const Search = () => {
  const location = useLocation();
  const { posts, isLoading, error } = useSubredditPosts(
    location.search.replace(/\?subreddit=/i, ''),
  );

  return (
    <>
      <SubredditForm />

      {isLoading === true ? <Loading /> : <Heatmap posts={posts} />}

      <Posts />

      {error !== null ? <ErrorMessage /> : null}
    </>
  );
};

export default Search;
