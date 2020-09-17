import React from 'react';
import { Link } from 'react-router-dom';
import SigninLinks from './SigninLinks';
import SignoutLinks from './SignoutLinks';
import './Navbar.css';
import { connect } from 'react-redux';

function Navbar({ auth }) {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <h5>My Plan</h5>
                </Link>
            </div>

            {
                auth.uid ? (
                    <SigninLinks />
                ) : (
                    <SignoutLinks />
                )
            }
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
