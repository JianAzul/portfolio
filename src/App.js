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
    name: 'Your Name',
    username: 'your_username',
    bio: 'Designer-Coder-Engineer | Creating beautiful experiences | Available for freelance work',
    location: 'Your Location',
    joinDate: 'March 2023',
    verified: true,
    bannerImage: '/assets/images/banner.jpg'
  };
  
  // Project data
  const projects = [
    {
      id: 'project1',
      title: 'E-commerce Website',
      date: 'Oct 10',
      description: 'Just launched my new e-commerce website! Check out the clean design and smooth user experience. #WebDev #UI/UX',
      fullDescription: 'A fully responsive e-commerce website built with React and Node.js.',
      features: [
        'User authentication and profiles',
        'Product catalog with filtering and search',
        'Shopping cart and checkout process',
        'Admin dashboard for inventory management',
        'Payment integration with Stripe'
      ],
      summary: 'This project demonstrates my skills in frontend and backend development, database design, and third-party API integration.',
      links: [
        { text: 'Visit Website', url: '#' },
        { text: 'View Code', url: '#' }
      ]
    },
    {
      id: 'project2',
      title: 'Mobile App Design',
      date: 'Sep 28',
      description: 'Excited to share my latest mobile app design! Created with React Native and focusing on accessibility. #MobileApp #ReactNative',
      fullDescription: 'A React Native mobile application focused on accessibility and user experience.',
      features: [
        'Cross-platform compatibility (iOS and Android)',
        'Custom UI components and animations',
        'Offline-first architecture',
        'Push notifications',
        'Deep accessibility integration'
      ],
      summary: 'This project showcases my mobile development skills, attention to accessibility standards, and ability to create smooth, intuitive user interfaces.',
      links: [
        { text: 'App Store', url: '#' },
        { text: 'View Code', url: '#' }
      ]
    },
    {
      id: 'project3',
      title: 'Data Visualization Dashboard',
      date: 'Aug 15',
      description: 'Just completed this dashboard project using Vue.js and D3 for data visualization. Real-time updates and responsive design. #DataViz #VueJS',
      fullDescription: 'An interactive dashboard built with Vue.js and D3.js for real-time data visualization.',
      features: [
        'Real-time data updates via WebSockets',
        'Multiple visualization types (charts, graphs, maps)',
        'Customizable dashboard layouts',
        'Data filtering and export options',
        'Responsive design for all device sizes'
      ],
      summary: 'This project demonstrates my skills in data visualization, frontend frameworks, and creating interactive user experiences.',
      links: [
        { text: 'Live Demo', url: '#' },
        { text: 'View Code', url: '#' }
      ]
    }
  ];
  
  // Links data
  const links = [
    { icon: 'fab fa-github', text: 'GitHub', url: '#' },
    { icon: 'fab fa-linkedin', text: 'LinkedIn', url: '#' },
    { icon: 'fas fa-globe', text: 'Personal Website', url: '#' },
    { icon: 'fas fa-envelope', text: 'your.email@example.com', url: 'mailto:your.email@example.com' }
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
      icon: 'fas fa-video',
      link: 'https://youtube.com/'
    },
    {
      title: 'Design Podcast Interview',
      description: 'My interview on the Design Systems podcast discussing UX patterns',
      icon: 'fas fa-podcast',
      link: 'https://spotify.com/'
    },
    {
      title: 'Conference Talk: Modern React Patterns',
      description: 'My presentation from React Summit 2023 on modern component patterns',
      icon: 'fas fa-microphone-alt',
      link: 'https://youtube.com/'
    },
    {
      title: 'Design Showcase',
      description: 'A gallery of my recent UI/UX design work featured on Dribbble',
      icon: 'fas fa-images',
      link: 'https://dribbble.com/'
    },
    {
      title: 'Technical Blog: State Management',
      description: 'My article on modern state management in React applications',
      icon: 'fas fa-newspaper',
      link: 'https://medium.com/'
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