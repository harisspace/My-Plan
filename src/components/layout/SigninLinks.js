import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authAction';

function SigninLinks({signout}) {
    return (
        <ul className="signinLinks">
            <NavLink to="/create">New Project</NavLink>
            <NavLink to="/signin" onClick={signout}>Log Out</NavLink>
            <NavLink to="/"><div className="navbar__avatar">HA</div></NavLink>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SigninLinks)
