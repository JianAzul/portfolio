// ProjectModal.js - Component for project details modal with video support
import React from 'react';
import ProjectVideo from './ProjectVideo';

function ProjectModal({ project, onClose }) {
  const { 
    title, 
    fullDescription, 
    features, 
    summary, 
    links,
    videoSrc,
    videoTitle,
    videoDemos
  } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>
        
        <div className="modal-body">
          {videoSrc && (
            <section className="modal-section">
              <h3>Project Demo</h3>
              <ProjectVideo videoSrc={videoSrc} title={videoTitle || title} />
            </section>
          )}
          
          <section className="modal-section">
            <h3>Project Description</h3>
            <p>{fullDescription}</p>
          </section>
          
          <section className="modal-section">
            <h3>Key Features</h3>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
          
          {videoDemos && videoDemos.length > 0 && (
            <section className="modal-section">
              <h3>Video Demonstrations</h3>
              <div className="video-demos-container">
                {videoDemos.map((demo, index) => (
                  <div key={index} className="video-demo-item">
                    <ProjectVideo videoSrc={demo.src} title={demo.title} />
                    {demo.description && (
                      <p className="video-demo-description">{demo.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          <section className="modal-section">
            <h3>Summary</h3>
            <p>{summary}</p>
          </section>
          
          <section className="modal-section">
            <h3>Links</h3>
            <div className="modal-links">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  {link.text} <i className="fas fa-external-link-alt"></i>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;