import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('a / útvonalon megjelenik a Hello World szöveg', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
