import React, { useState } from 'react';
import App from './App';
import { AppContext } from './context';

export default function() {
    const [appState, setAppState] = useState({
        videoList: require('./data/video-list.json')
    })

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            <App />
        </AppContext.Provider>
    );
}