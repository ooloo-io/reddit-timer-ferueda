import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

import { daysArray, hoursArray } from '../constants/daysAndTime';
import { capitalizeWord } from '../utils/helpers';

const setup = (initialPath = '/search?subreddit=javascript') => {
  const app = (
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
  render(app);
};

describe('Search Page', () => {
  describe('Loading component', () => {
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
  });

  describe('Error component', () => {
    test('on failed request, error message is shown', async () => {
      setup('/search?subreddit=failed');

      expect(await screen.findByRole('heading', { name: /an error ocurred/i })).toBeInTheDocument();
      expect(screen.queryByRole('img', { name: /loading/i })).not.toBeInTheDocument();
    });
  });

  describe('Heatmap', () => {
    test('it renders', async () => {
      setup();

      expect(await screen.findByRole('table')).toBeInTheDocument();
      expect(screen.queryByRole('img', { name: /loading/i })).not.toBeInTheDocument();

      daysArray.forEach((day) => {
        expect(screen.getByText(capitalizeWord(day))).toBeInTheDocument();
      });

      hoursArray.forEach((hour) => {
        expect(screen.getByText(hour)).toBeInTheDocument();
      });
    });

    test('it displays the right amount of posts when data is 500 posts', async () => {
      setup();

      const cells = await screen.findAllByRole('cell');
      const sum = cells.reduce((acc, cell) => acc + Number(cell.textContent), 0);

      expect(sum).toBe(500);
      expect(cells).toHaveLength(168);
    });

    test('it displays the right amount of posts when data is 270 posts', async () => {
      setup('/search?subreddit=lessthan500');

      const cells = await screen.findAllByRole('cell');
      const sum = cells.reduce((acc, cell) => acc + Number(cell.textContent), 0);

      expect(sum).toBe(270);
      expect(cells).toHaveLength(168);
    });

    test('timezone message renders', async () => {
      setup();

      expect(await screen.findByText(/all times are shown/i)).toBeInTheDocument();
    });
  });
});
