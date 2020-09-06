import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Footer', () => {
  const getWithinFooter = () => within(screen.getByRole('contentinfo'));

  test('it renders', () => {
    setup();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  describe('logo', () => {
    test('it renders', () => {
      setup();
      expect(getWithinFooter().getByRole('link', { name: /logo/i })).toBeInTheDocument();
    });

    test('it links to home', () => {
      setup('/search?subreddit=javascript');
      const logo = getWithinFooter().getByRole('link', { name: /logo/i });

      expect(logo).toHaveAttribute('href', '/');

      userEvent.click(logo);

      expect(screen.getByRole('heading', { name: /this is the home/i })).toBeInTheDocument();
    });
  });

  describe('Nav items', () => {
    test('they render', () => {
      setup();
      expect(getWithinFooter().getByRole('link', { name: /ooloo\.io/i })).toBeInTheDocument();
      expect(getWithinFooter().getByRole('link', { name: /terms & privacy/i })).toBeInTheDocument();
    });

    test('ooloo.io links to the right url', () => {
      setup();
      expect(getWithinFooter().getByRole('link', { name: /ooloo\.io/i }).href).toMatch(/ooloo\.io/i);
    });

    test('terms & privacy links to terms page', () => {
      setup();
      expect(getWithinFooter().getByRole('link', { name: /terms & privacy/i }).href).toMatch(/\/terms/i);
    });
  });
});
