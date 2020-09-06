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

describe('Header', () => {
  const getWithinHeader = () => within(screen.getByRole('banner'));

  test('it renders', () => {
    setup();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  describe('Logo', () => {
    test('it renders', () => {
      setup();
      expect(getWithinHeader().getByRole('link', { name: /logo/i })).toBeInTheDocument();
    });

    test('it links to home', () => {
      setup('/search?subreddit=javascript');
      const logo = getWithinHeader().getByRole('link', { name: /logo/i });
      expect(logo).toHaveAttribute('href', '/');

      userEvent.click(logo);

      expect(screen.getByRole('heading', { name: /this is the home/i })).toBeInTheDocument();
    });
  });

  describe('Nav menu', () => {
    test('it renders', () => {
      setup();
      expect(getWithinHeader().getByRole('navigation')).toBeInTheDocument();
    });

    test('it has all menu items', () => {
      setup();
      const navItem = [/search/i, /how it works/i, /about/i];
      const nav = getWithinHeader().getByRole('navigation');
      navItem.forEach((item) => expect(nav.textContent).toMatch(item));
    });

    test('search item links to search page', () => {
      setup();
      const linkItem = getWithinHeader().getByRole('link', { name: /search/i });
      expect(linkItem.href).toMatch(/search/i);

      userEvent.click(linkItem);

      expect(screen.getByRole('heading', { name: /this is the search page/i })).toBeInTheDocument();
    });

    test('search item link defaults to "javascript" query', () => {
      setup();
      expect(getWithinHeader().getByRole('link', { name: /search/i }).href).toMatch(/\?subreddit=javascript/i);
    });

    test('how it works item links to #how-it-works', () => {
      setup();
      const navItem = getWithinHeader().getByRole('link', { name: /how it works/i });
      expect(navItem.href).toMatch(/#how-it-works/i);
    });

    test('about item links to #about', () => {
      setup();
      const navItem = getWithinHeader().getByRole('link', { name: /about/i });
      expect(navItem.href).toMatch(/#about/i);
    });
  });
});
