import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

test('a / útvonalon megjelenik a Hello World szöveg', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
