// Navigation.js - Component for tab navigation
import React from 'react';

function Navigation({ activeTab, onTabChange }) {
  return (
    <div className="navigation">
      <button 
        className={`nav-button ${activeTab === 'posts' ? 'active' : ''}`}
        onClick={() => onTabChange('posts')}
      >
        <i className="fas fa-th"></i>
        <span>Projects</span>
      </button>
      
      <button 
        className={`nav-button ${activeTab === 'links' ? 'active' : ''}`}
        onClick={() => onTabChange('links')}
      >
        <i className="fas fa-link"></i>
        <span>Links</span>
      </button>
      
      <button 
        className={`nav-button ${activeTab === 'skills' ? 'active' : ''}`}
        onClick={() => onTabChange('skills')}
      >
        <i className="fas fa-code"></i>
        <span>Skills</span>
      </button>
      
      <button 
        className={`nav-button ${activeTab === 'media' ? 'active' : ''}`}
        onClick={() => onTabChange('media')}
      >
        <i className="fas fa-image"></i>
        <span>Media</span>
      </button>
    </div>
  );
}

export default Navigation;