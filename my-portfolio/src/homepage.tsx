// src/components/HomePage.tsx
import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer building beautiful and functional web apps.</p>
        <a href="#projects" className="home-btn">View Projects</a>
      </header>
    </div>
  );
};

export default HomePage;

