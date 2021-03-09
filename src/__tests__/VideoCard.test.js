import React from 'react';
import { VideoCard } from '../components/cards';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('VideoCard', () => {
    let component;
    const testFunc = jest.fn();
    let cardProps = {
        id: 0,
        headerImage: "lake-inniscarra-thumb.jpg",
        trainerImage: "lake-inniscarra-trainer.jpg",
        title: "Lake Inniscarra, Ireland - Pyramid",
        length: "30:53",
        distance: "6,248 M",
        isPlaylist: false,
        numberOfVideos: 0,
        cardState: "init",
    }

    beforeEach(() => {
        component = render(<VideoCard {...cardProps} setVideoCardSelected={testFunc}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('renders without crashing', () => {
        const { getAllByTestId } = component;

        expect(getAllByTestId('card-main').length).toBe(1);
    });

    it('renders props', () => {
        const { getAllByText } = component;

        expect(getAllByText(cardProps.title).length).toBe(1);
        expect(getAllByText(cardProps.length).length).toBe(1);
        expect(getAllByText(cardProps.distance).length).toBe(1);
    });

    it('calles a function on click', () => {
        const { getByTestId } = component;

        userEvent.click(getByTestId('card-main'));

        expect(testFunc).toHaveBeenCalled();
    });
});