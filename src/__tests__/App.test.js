import React from 'react';
import App from '../App';
import { render, cleanup } from '@testing-library/react';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = render(<App />);
    });

    afterEach(() => {
        cleanup();
    });

    it('renders without crashing', () => {
        const { getAllByTestId } = component;
        expect(getAllByTestId('app-main').length).toBe(1);
    });

    it ('renders correct number of VideoCard components', () => {
        const { getAllByTestId } = component;
        expect(getAllByTestId('card-main').length).toBe(8);
    });
});