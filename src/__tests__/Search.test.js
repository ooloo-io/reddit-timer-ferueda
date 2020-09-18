import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import mockResponse from '../__mocks__/subreddit-javascript-response.json';

fetchMock.enableMocks();

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
    fetch.once(JSON.stringify(mockResponse));
    setup();
    const spinner = screen.getByRole('img', { name: /loading/i });

    expect(spinner).toBeInTheDocument();

    await waitForElementToBeRemoved(spinner);
    expect(spinner).not.toBeInTheDocument();
  });

  test('when submitting form, loading spinner appears and then disappears', async () => {
    fetch.once(JSON.stringify(mockResponse));
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
});
