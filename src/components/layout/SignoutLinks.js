import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function SignoutLinks() {
    return (
        <ul className="signoutLinks">
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
        </ul>
    )
}

export default SignoutLinks
