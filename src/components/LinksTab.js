// LinksTab.js - Component for displaying links
import React from 'react';

function LinksTab({ links }) {
  return (
    <div className="links-tab">
      <h2 className="tab-heading">My Links</h2>
      
      <div className="links-container">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            className="link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.icon}></i>
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinksTab;