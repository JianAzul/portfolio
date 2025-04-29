// ProjectVideo.js - Component for embedding videos in projects
import React, { useState, useRef } from 'react';

function ProjectVideo({ videoSrc, title }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="project-video">
      <div className="video-container">
        <video 
          ref={videoRef}
          src={videoSrc}
          className="video-element"
          poster="/assets/images/video-thumbnail.jpg" // Optional: Add a thumbnail image
          controls
          preload="metadata"
        />
      </div>
      
      <div className="video-controls">
        <button onClick={togglePlay} className="play-button">
          {isPlaying ? (
            <><i className="fas fa-pause"></i> Pause</>
          ) : (
            <><i className="fas fa-play"></i> Play</>
          )}
        </button>
        <span className="video-title">{title}</span>
      </div>
    </div>
  );
}

export default ProjectVideo;