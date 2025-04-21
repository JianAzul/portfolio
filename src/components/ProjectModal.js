// ProjectModal.js - Component for project details modal
import React from 'react';

function ProjectModal({ project, onClose }) {
  const { 
    title, 
    fullDescription, 
    features, 
    summary, 
    links 
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