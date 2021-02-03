import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

export default function Navbar() {
    const link = {
        width: '100px',
        adding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
    }

    return (
        <nav className='navbar'>
            <div className='nav-content'>
                <Link activeClass='active' to="home" spy={true} style={link} smooth={true} duration={1000}>Home</Link>
                <Link activeClass='active' to="about" spy={true} style={link} smooth={true} duration={1000}>About</Link>
                <Link activeClass='active' to="projects" spy={true} style={link} smooth={true} duration={1000}>Projects</Link>
                <Link activeClass='active' to="blog" spy={true} style={link} smooth={true} duration={1000}>Blog</Link>
            </div>
        </nav>
    )
}

// <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
// <NavLink to='/projects' exact style={link} activeStyle={{background: 'darkblue'}}>Projects</NavLink>
// <NavLink to='/about' exact style={link} activeStyle={{background: 'darkblue'}}>About Me</NavLink>
// <NavLink to="/blog" exact style={link} activeStyle={{background: 'darkblue'}}>Blog</NavLink>