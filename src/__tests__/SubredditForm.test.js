import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../App';
import * as ROUTES from '../constants/routes';

const setup = (initialPath = '/search?subreddit=javascript') => {
  let history;

  const app = (
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>
  );
  render(app);

  return { history };
};

describe('Subreddit Form', () => {
  test('it renders', () => {
    setup();
    expect(screen.getByRole('heading', { name: /find the best time/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'r/' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('default url is search for javascript', () => {
    const { history } = setup();

    expect(history.location.pathname).toBe('/search');
    expect(history.location.search).toBe(`?${ROUTES.DEFAULT_QUERY}`);
  });

  test('input works as intended', () => {
    setup();
    const input = screen.getByRole('textbox', { name: 'r/' });
    expect(input).toHaveValue(ROUTES.DEFAULT_QUERY.replace(/subreddit=/i, ''));

    userEvent.clear(input);
    expect(input).toHaveValue('');

    const toBeTyped = 'test';

    userEvent.type(input, toBeTyped);
    expect(input).toHaveValue(toBeTyped);
  });

  test('submitting the form updates the url', () => {
    const { history } = setup();
    const input = screen.getByRole('textbox', { name: 'r/' });

    const toBeTyped = 'test';

    userEvent.clear(input);
    userEvent.type(input, toBeTyped);
    userEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(history.location.pathname).toBe('/search');
    expect(history.location.search).toBe(`?subreddit=${toBeTyped}`);
  });
});
