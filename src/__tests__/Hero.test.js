import React from 'react';
import { render, screen } from '@testing-library/react';
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

describe('Hero', () => {
  describe('Headings', () => {
    test('they render', () => {
      setup();
      expect(screen.getByRole('heading', { name: /no reactions/i })).toBeInTheDocument();
      expect(screen.getByText(/great timing, great results/i)).toBeInTheDocument();
    });
  });

  describe('CTA Button', () => {
    test('it renders', () => {
      setup();
      expect(screen.getByRole('link', { name: /show me/i })).toBeInTheDocument();
    });

    test('it links to the search page', () => {
      setup();
      const button = screen.getByRole('link', { name: /show me/i });
      expect(button).toHaveAttribute('href', '/search?subreddit=javascript');

      userEvent.click(button);

      expect(screen.getByRole('heading', { name: /search page/i })).toBeInTheDocument();
    });
  });

  describe('Subreddit example', () => {
    test('it renders', () => {
      setup();
      expect(screen.getByText(/r\/javascript/i)).toBeInTheDocument();
      expect(screen.getByAltText(/hero table/i)).toBeInTheDocument();
    });

    test('Table image links to search page', () => {
      setup();
      userEvent.click(screen.getByAltText(/hero table/i));

      expect(screen.getByRole('heading', { name: /search page/i })).toBeInTheDocument();
    });
  });
});
