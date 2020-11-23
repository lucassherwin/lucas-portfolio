import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>My Portfolio</h1>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/blog'>
            <Blog />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
