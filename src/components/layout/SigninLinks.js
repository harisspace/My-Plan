import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function SigninLinks() {
    return (
        <ul className="signinLinks">
            <NavLink to="/create">New Project</NavLink>
            <NavLink to="/">Log Out</NavLink>
            <NavLink to="/"><div className="navbar__avatar">HA</div></NavLink>
        </ul>
    )
}

export default SigninLinks
