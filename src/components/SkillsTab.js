// SkillsTab.js - Component for displaying skills
import React from 'react';

function SkillsTab({ skills }) {
  return (
    <div className="skills-tab">
      <h2 className="tab-heading">My Skills</h2>
      
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <p className="skill-items">{skillGroup.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsTab;