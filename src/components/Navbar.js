import React from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';

export default function Navbar() {
  const Nav = styled.nav`
    position: fixed;
  `;
  
  const link = {
    width: '100px',
    padding: '8px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }
  
  return (
    <Nav className='navbar'>
      <Link activeClass='active' to="home" spy={true} smooth={true} style={link} duration={1000}>Home</Link>
      <Link activeClass='active' to="about" spy={true} smooth={true} style={link} duration={1000}>About</Link>
      <Link activeClass='active' to="projects" spy={true} smooth={true} style={link} duration={1000}>Projects</Link>
      <Link activeClass='active' to="blog" spy={true} smooth={true} style={link} duration={1000}>Blog</Link>
    </Nav>
  )
}

// <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
// <NavLink to='/projects' exact style={link} activeStyle={{background: 'darkblue'}}>Projects</NavLink>
// <NavLink to='/about' exact style={link} activeStyle={{background: 'darkblue'}}>About Me</NavLink>
// <NavLink to="/blog" exact style={link} activeStyle={{background: 'darkblue'}}>Blog</NavLink>
