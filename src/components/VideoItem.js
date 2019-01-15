import './VideoItem.css';
import React from 'react';

//onClick we want onVideoSelect to pass the video as well
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
        </div>
    );
};

export default VideoItem;