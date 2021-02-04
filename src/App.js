import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Blog from './components/Blog.js';
import HomePage from './components/HomePage.js';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './App.css';
import './card.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
        <About />
        <Projects />
        <Blog />
      </div>
    )
  }
}

export default App