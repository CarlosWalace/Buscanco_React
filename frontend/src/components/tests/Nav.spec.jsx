import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../template/Nav';

describe('Nav', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Usuários')).toBeInTheDocument();
    expect(screen.getByText('Linhas')).toBeInTheDocument();
  });

  it('should have correct links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Início' });
    const usersLink = screen.getByRole('link', { name: 'Usuários' });
    const linesLink = screen.getByRole('link', { name: 'Linhas' });

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(usersLink.getAttribute('href')).toBe('/users');
    expect(linesLink.getAttribute('href')).toBe('/linhas');
  });
});