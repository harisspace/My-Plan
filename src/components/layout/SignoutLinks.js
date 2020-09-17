import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';

function SignoutLinks(props) {
    const { auth } = props;
    if (auth.isEmpty) {
        return (
            <ul className="signoutLinks">
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
            </ul>
        )
    }else {
        
    }
    
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignoutLinks)
