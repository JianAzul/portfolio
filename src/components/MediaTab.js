// MediaTab.js - Component for displaying media links and embeds
import React, { useRef, useState } from 'react';

function MediaTab({ media }) {
  return (
    <div className="media-tab">
      <h2 className="tab-heading">My Media</h2>
      
      {media && media.length > 0 ? (
        <div className="media-container">
          {media.map((item, index) => (
            <div key={index} className="media-item">
              {item.videoSrc ? (
                <VideoPlayer 
                  src={item.videoSrc} 
                  title={item.title} 
                  description={item.description}
                />
              ) : (
                <>
                  <i className={item.icon}></i>
                  <div className="media-item-content">
                    <h3 className="media-title">{item.title}</h3>
                    <p className="media-description">{item.description}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="media-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>More media content coming soon!</p>
        </div>
      )}
    </div>
  );
}

// Internal VideoPlayer component
function VideoPlayer({ src, title, description }) {
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
    <div className="video-player">
      <div className="video-header">
        <i className="fas fa-video"></i>
        <h3 className="media-title">{title}</h3>
      </div>
      
      <div className="video-container">
        <video 
          ref={videoRef}
          src={src}
          className="video-element"
          controls
          preload="metadata"
        />
      </div>
      
      <div className="media-item-content">
        <p className="media-description">{description}</p>
        <button onClick={togglePlay} className="play-button">
          {isPlaying ? (
            <><i className="fas fa-pause"></i> Pause</>
          ) : (
            <><i className="fas fa-play"></i> Play</>
          )}
        </button>
      </div>
    </div>
  );
}

export default MediaTab;