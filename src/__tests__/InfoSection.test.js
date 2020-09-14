import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const setup = (initialPath = '/') => {
  const app = (
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );

  render(app);
};

describe('InfoSection', () => {
  test('it renders', () => {
    setup();
    expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  test('links points to the right url', () => {
    setup();
    const main = screen.getByRole('main');

    expect(within(main).getByRole('link', { name: /ooloo\.io/i })).toHaveAttribute(
      'href',
      'https://ooloo.io',
    );
    expect(
      within(main).getByRole('link', { name: /click here for more information/i }),
    ).not.toHaveAttribute('href', 'https://ooloo.io/employers');
  });
});
