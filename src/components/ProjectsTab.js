// ProjectsTab.js - Component for displaying project posts
import React from 'react';
import ProjectPost from './ProjectPost';

function ProjectsTab({ projects, onProjectClick }) {
  return (
    <div className="projects-tab">
      {projects.map(project => (
        <ProjectPost 
          key={project.id} 
          project={project} 
          onClick={() => onProjectClick(project.id)} 
        />
      ))}
    </div>
  );
}

export default ProjectsTab;