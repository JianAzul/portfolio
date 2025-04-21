// MediaTab.js - Component for displaying media links and embeds
import React from 'react';

function MediaTab({ media }) {
  return (
    <div className="media-tab">
      <h2 className="tab-heading">My Media</h2>
      
      {media && media.length > 0 ? (
        <div className="media-container">
          {media.map((item, index) => (
            <div key={index} className="media-item">
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

export default MediaTab;