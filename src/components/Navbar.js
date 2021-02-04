import React from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';

export default function Navbar() {
  const link = {
    width: '100px',
    adding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  const Navbar = styled.nav`
    position: fixed;
  `;

  return (
    <Navbar className='navbar'>
      <Link activeClass='active' to="home" spy={true} style={link} smooth={true} duration={1000}>Home</Link>
      <Link activeClass='active' to="about" spy={true} style={link} smooth={true} duration={1000}>About</Link>
      <Link activeClass='active' to="projects" spy={true} style={link} smooth={true} duration={1000}>Projects</Link>
      <Link activeClass='active' to="blog" spy={true} style={link} smooth={true} duration={1000}>Blog</Link>
    </Navbar>
  )
}

// <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
// <NavLink to='/projects' exact style={link} activeStyle={{background: 'darkblue'}}>Projects</NavLink>
// <NavLink to='/about' exact style={link} activeStyle={{background: 'darkblue'}}>About Me</NavLink>
// <NavLink to="/blog" exact style={link} activeStyle={{background: 'darkblue'}}>Blog</NavLink>