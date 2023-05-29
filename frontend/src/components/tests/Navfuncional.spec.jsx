import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../template/Nav';

describe('Nav', () => {
  it('should navigate to the correct pages when links are clicked', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Início' });
    const usersLink = screen.getByRole('link', { name: 'Usuários' });
    const linesLink = screen.getByRole('link', { name: 'Linhas' });

    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(usersLink);
    expect(window.location.pathname).toBe('/users');

    fireEvent.click(linesLink);
    expect(window.location.pathname).toBe('/linhas');
  });
});