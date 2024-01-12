import React, { Component } from 'react';
import About from './components/About.js';
import Blog from './components/Blog.js';
import HomePage from './components/HomePage.js';
import Projects from './components/Projects.js';
import './App.css';
import './card.css';

const App = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
      <Blog />
    </div>
  );
}

export default App;
