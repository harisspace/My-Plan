import React from 'react';
import { Link } from 'react-router-dom';
import SigninLinks from './SigninLinks';
import SignoutLinks from './SignoutLinks';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <h5>My Plan</h5>
                </Link>
            </div>
            <SigninLinks />
            <SignoutLinks />
        </div>
    )
}

export default Navbar
