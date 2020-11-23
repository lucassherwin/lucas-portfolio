import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className='navbar'>
            <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
            <NavLink to='/projects' exact style={link} activeStyle={{background: 'darkblue'}}>Projects</NavLink>
            <NavLink to='/about' exact style={link} activeStyle={{background: 'darkblue'}}>About Me</NavLink>
            <NavLink to="/blog" exact style={link} activeStyle={{background: 'darkblue'}}>Blog</NavLink>
        </div>
    )
}
