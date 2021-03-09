import React, { useState } from 'react';
import { VideoCard } from './components/cards';
import data from './data/video-list.json';

function App() {
  const [appState, setAppState] = useState({...data});

  function generateVideoCards() {
    if (appState.videoList !== undefined && appState.videoList.length > 0) {
      return appState.videoList.map((video, index) => (
        <VideoCard 
          index={index}
          key={`video_card_${video.headerImage}_${index}`}
          {...video}
          setVideoCardSelected={setVideoCardSelected}
          />
      ));
    } else {
      return <div>No videos available.</div>
    }
  }

  function setVideoCardSelected(index) {
    let tmp = appState.videoList;

    tmp.filter((video) => {
      // video.id === index ? video.cardState = 'selected' : video.cardState = 'unselected';
      if (video.id === index) {
        video.cardState = 'selected';
      } else {
        video.cardState !== 'init' ? video.cardState = 'unselected' : video.cardState = 'init';
      }

      return video;
    });

    setAppState({ videoList: tmp });
  }

  return (
      <div className="app-main" data-testid="app-main">
        { generateVideoCards() }
      </div>
  );
}

export default App;
