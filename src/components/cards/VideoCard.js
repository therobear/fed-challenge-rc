import React from 'react';
import PlayListIcon from '../../images/playlist.svg';
import StopWatch from '../../images/stopwatch.svg';
import Compass from '../../images/compass.svg';

export default function(props) {
    function updateClassName() {
        let className = "";

        switch (props.cardState) {
            case 'init':
                className = 'card-container';
                break;

            case 'selected':
                className = 'card-container-selected';
                break;

            case 'unselected':
                className = 'card-container-unselected';
                break;

            default:
                className = 'card-container';
                break;
        }

        return className;
    }

    return (
        <div key={`video_${props.headerImage}`} className={updateClassName()} onClick={() => props.setVideoCardSelected(props.index)} data-testid="card-main">
            <div className="card-header">
                <div className="card-header-image">
                    <img style={{objectFit: "cover"}} src={`${process.env.PUBLIC_URL}/images/${props.headerImage}`} alt="Header" />
                </div>
                { 
                    props.isPlaylist && <div className="card-header-playlist">
                            <div className="card-header-playlist-sub-container">
                                <div className="card-header-playlist-number">{props.numberOfVideos}</div>
                                <div className="card-header-playlist-subtext">WORKOUTS</div>
                                <div><img className="card-header-playlist-icon" src={PlayListIcon} alt="Playlist" /></div>
                            </div>
                        </div>
                }
            </div>
            <div className="card-details">
                <div className="card-details-title-section ">
                    <div className="card-details-title-text">{props.title}</div>
                    <div className="card-details-inst-thumb"><img src={`${process.env.PUBLIC_URL}/images/${props.trainerImage}`} className="card-details-inst-thumb-img" alt="Instructor"/></div>
                </div>
                {
                    !props.isPlaylist ? <div className="card-details-info-section">
                        <div className="card-details-info"><img src={StopWatch} className="card-details-icons" alt="Stop Watch" /> {props.length}</div>
                        <div className="card-details-info"><img src={Compass} className="card-details-icons" alt="Compass" /> {props.distance}</div>
                    </div> :<div className="card-details-info-section">&nbsp;</div>
                }
                <div className="card-details-view-text">{ props.cardState === 'selected' ? "VIEW DETAILS" : "" }</div>
            </div>
        </div>
    );
}