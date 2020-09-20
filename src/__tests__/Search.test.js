import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const setup = (initialPath = '/search?subreddit=javascript') => {
  const app = (
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
  render(app);
};

describe('Search Page', () => {
  test('loading spinner is visible and then disappears', async () => {
    setup();
    const spinner = screen.getByRole('img', { name: /loading/i });

    expect(spinner).toBeInTheDocument();

    await waitForElementToBeRemoved(spinner);
    expect(spinner).not.toBeInTheDocument();
  });

  test('when submitting form, loading spinner appears and then disappears', async () => {
    setup();
    const input = screen.getByRole('textbox', { name: 'r/' });
    const button = screen.getByRole('button', { name: /search/i });

    userEvent.clear(input);
    userEvent.type(input, 'reactjs');
    userEvent.click(button);

    const spinner = screen.getByRole('img', { name: /loading/i });

    expect(spinner).toBeInTheDocument();

    await waitForElementToBeRemoved(spinner);

    expect(spinner).not.toBeInTheDocument();
  });

  test('on failed request, error message is shown', async () => {
    setup('/search?subreddit=failed');

    expect(await screen.findByRole('heading', { name: /an error ocurred/i })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /loading/i })).not.toBeInTheDocument();
  });
});
