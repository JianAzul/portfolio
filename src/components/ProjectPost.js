// ProjectPost.js - Component for a single project post with responsive image
import React from 'react';

function ProjectPost({ project, onClick }) {
  const { title, date, description, image } = project;

  return (
    <div className="project-post" onClick={onClick}>
      {image && (
        <div className="post-image">
          <img 
            src={image} 
            alt={title}
            loading="lazy" // Lazy loading for better performance
          />
        </div>
      )}
      
      <div className="post-header">
        <h3 className="post-title">{title}</h3>
        <span className="post-date">{date}</span>
      </div>
      
      <p className="post-description">{description}</p>
      
      <div className="post-footer">
        <button className="details-button">
          View Details <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ProjectPost;