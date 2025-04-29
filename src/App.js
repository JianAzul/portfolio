// App.js - Main component
import React, { useState } from 'react';
import './App.css'; // We'll create this file for your styles
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import ProjectsTab from './components/ProjectsTab';
import LinksTab from './components/LinksTab';
import SkillsTab from './components/SkillsTab';
import MediaTab from './components/MediaTab';
import ProjectModal from './components/ProjectModal';

function App() {
  const [activeTab, setActiveTab] = useState('posts');
  const [activeModal, setActiveModal] = useState(null);
  
  // Profile data
  const profileData = {
    name: 'Jian Azul',
    username: 'Jijoazul',
    bio: 'Designer-Coder-Engineer | Creating beautiful experiences | Available for freelance work',
    location: 'Washington',
    joinDate: 'May',
    verified: true,
    bannerImage: '/assets/images/banner.jpg'
  };
  
  // Project data
  const projects = [
    {
      id: 'project1',
      title: 'Re:connect – A Retro-Inspired Typing Game',
      date: 'October',
      description: 'Re:connect is a retro-style typing game built with JavaScript over a 10-week sprint. Designed to evoke the feel of old DOS systems and Pip-Boy interfaces, it combines tight mechanics with nostalgic visuals.',
      fullDescription: 'Re:connect is a retro-inspired typing game developed by a small team under tight deadlines. Built with JavaScript, the project simulates a broken computer environment through a pseudo-terminal interface, glitch visuals, and reactive sound design. Despite limited resources, we created an immersive, replayable experience with progressive difficulty and polished feedback loops.',
      features: [
        'Pseudo-terminal launcher that simulates a broken computer boot-up',
        'Custom-coded particle effects triggered by correct typing',
        'Dynamic glitch visuals for mistyped words',
        'Progressive word complexity and typing speed increases',
        'Immersive sound design featuring clicks, glitches, and confirmation tones'
      ],
      summary: 'This project deepened my skills in JavaScript graphics programming, small-team collaboration, gameplay design, and project documentation. It emphasized balancing aesthetics, technical complexity, and user experience under real-world constraints.',
      links: [
        { text: 'Gameplay Demo', url: 'https://www.youtube.com/watch?v=eFfwpp1MaYk' },
        { text: 'View Code', url: '#' }
      ]
    }
  ];
  
  // Links data
  const links = [
    { icon: 'fab fa-github', text: 'GitHub', url: 'https://github.com/JianAzul/portfolio' },
    { icon: 'fab fa-linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/in/jian-azul/' },
  ];
  
  // Skills data
  const skills = [
    { category: 'Frontend', items: 'HTML5, CSS3, JavaScript, React, Vue.js' },
    { category: 'Backend', items: 'Node.js, Express, MongoDB, Firebase' },
    { category: 'Tools', items: 'Git, Webpack, VS Code, Figma, Adobe XD' },
    { category: 'Other', items: 'Responsive Design, SEO, Performance Optimization' }
  ];
  
  // Media data
  const media = [
    {
      title: 'Portfolio Walkthrough',
      description: 'A video tutorial explaining my design process and portfolio projects',
    }
  ];
  
  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Handle modal opening and closing
  const openModal = (projectId) => {
    setActiveModal(projectId);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };
  
  // Get project by ID
  const getProject = (projectId) => {
    return projects.find(project => project.id === projectId);
  };
  
  return (
    <div className="container">
      <Profile profileData={profileData} />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {activeTab === 'posts' && (
        <ProjectsTab projects={projects} onProjectClick={openModal} />
      )}
      
      {activeTab === 'links' && (
        <LinksTab links={links} />
      )}
      
      {activeTab === 'skills' && (
        <SkillsTab skills={skills} />
      )}
      
      {activeTab === 'media' && (
        <MediaTab media={media} />
      )}
      
      {activeModal && (
        <ProjectModal 
          project={getProject(activeModal)} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;